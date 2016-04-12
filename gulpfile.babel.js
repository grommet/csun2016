import gulp from 'gulp';
import grommetToolbox, {getOptions} from 'grommet-toolbox';
import yargs from 'yargs';
const argv = yargs.argv;
import git from 'gulp-git';
import del from 'del';
import mkdirp from 'mkdirp';

const opts = getOptions();

gulp.task('set-webpack-alias', () => {
  if (opts.alias && argv.useAlias) {
    console.log('Using local alias for development.');
    opts.webpack.resolve.alias = opts.alias;
  }
});

gulp.task('release:createTmp', (done) => {
  del.sync(['./tmp']);
  mkdirp('./tmp', (err) => {
    if (err) {
      throw err;
    }
    done();
  });
});

gulp.task('release:gh-pages', ['dist', 'release:createTmp'], (done) => {
  if (process.env.CI) {
    git.clone(
      'https://' + process.env.GH_TOKEN + '@github.com/grommet/grommet-csun.git',
      {
        cwd: './tmp/'
      },
      (err) => {
        if (err) {
          throw err;
        }

        process.chdir('./tmp/grommet-csun');
        git.checkout('gh-pages', (err) => {
          if (err) {
            throw err;
          }

          del.sync(['./**/*']);

          gulp.src('../../dist/**').pipe(gulp.dest('./')).on('end', () => {
            git.status({
              args: '--porcelain'
            }, (err, stdout) => {
              if (err) {
                throw err;
              }

              if (stdout && stdout !== '') {
                gulp.src('./')
                  .pipe(git.add({
                    args: '--all'
                  }))
                  .pipe(git.commit('gh-pages dev version update.')).on('end', () => {
                    git.push('origin', 'gh-pages', { quiet: true }, (err) => {
                      if (err) {
                        throw err;
                      }

                      process.chdir(__dirname);
                      done();
                    });
                  });
              } else {
                console.log('No difference since last commit, skipping gh-pages release.');

                process.chdir(__dirname);
                done();
              }
            });
          });
        });
      }
    );
  } else {
    console.warn('Skipping release. Release:gh-pages task should be executed by CI only.');
  }
});

grommetToolbox(gulp, opts);

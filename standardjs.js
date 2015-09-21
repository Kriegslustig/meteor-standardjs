var standard = Npm.require('standard')

Plugin.registerLinter({
  extensions: ['js']
}, function () {
  var standardjs = new Standardjs()
  return standardjs
})

var Standardjs = function () {}

standardjs.prototype.processFilesForPackage = function (files, options) {
  files.forEach(function (file) {
    standard.lintText(file.getContentsAsString(), function (err, data) {
      if(data.errorCount < 1 && data.warningCount < 1) return
      data.results.messages.forEach(function (err) {
        file.error({
          message: [err.ruleId, ': ', err.message].join('')
          line: err.line,
          column: err.column,
        })
      })
    })
  })
}
const axios = require('axios')
const webpack = require('webpack')

const serverConfig = require('../../build/webpack.config.sever ')

const getTemplate = () => {
  return new Promise((reslove,reject)=>{
    axios.get('http://localhost:8888/public/index.html')
      .then(res => reslove(res.data))
      .catch(reject)
  })
}

const severCompiler = webpack(serverConfig)
severCompiler.watch({},(err,status)=>{
  if(err) throw err
})

module.exports = function (app){
  app.get('*', function(req,res){
  }) 
}
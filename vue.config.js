module.exports={
	baseUrl:"/",
	outputDir:'dist',
	assetsDir:'assets',
	lintOnSave:false,
	devServer: {
		open:true,
		host:'0.0.0.0',
		port:8080,
		https:false,
		hotOnly: false,
		proxy:{
			'/api':{
				target:"http://localhost:80",
				ws:true,
				changeOrigin: true
			}
		},
		before(app){

		  }
		}
	}
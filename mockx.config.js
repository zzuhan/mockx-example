module.exports = {
  // 填写要转发的域名
  domains: [
    "s.taobao.com"
  ],
  // 相对项目根目录下的mock文件夹
  mockDir: './mock',
  // 所有的映射规则
  rules: [
    {
      route: '/mockJSON',
      json: 'jsonfile.json'
    },

    {
      route: '/mockFile',
      file: 'file.html'
    }, 

    {
      route: '/mockJsData',
      jsdata: 'jsdata.js'
    },


    /**
     * webpack本地开发
     */
    {
      route: '/api/message/list',
      file: 'messageList.json'
    },  
    {
      route: /.*/,
      host: 'localhost',
      remote: 'localhost:8080$0'
    },

    /**
     * 替换线上的/search的内容到本地的search.html
     */
    {
      route: '/search',
      file: 'search.html'
    },  
    {
      route: /.*/,
      remote: 'origin'
    },

    /**
     * 映射一批接口
     */
    {
      route: '/\/api\/message\/(.*)/i',
      file: '$1.html'
    },

    {
      route: '/api/message/create',
      data: {
        title: 'xxx'
      },
      json: 'success.json'
    }, 
    {
      route: '/api/message/create',
      data: {
        title: 'xxxx'
      },
      json: 'error.json'
    },

    /**
     * 指定发送的headers或者返回的headers
     */
    {
      route: '/\/api\/message\/(.*)/i',
      remote: 'http://taobao.com/api/message/create',
      "headers": {
        "Access-Control-Allow-Origin": "*"
      },
      "requestHeaders": {
        "cookie": "NID=102=W21YoOeFkN6ndgJ_ZPQfa12YpMYdLm8Oxcy_QBg5zyQILhQDDhWdWMFBeyzZQmo8FsuykQNCJezRN_WfJ9m9e644dkd9_nH1yVbk2B9LvhL8hYpufpYe39VFvfcKHBa6DzTKKeije1Adlrrf3nw36LMPkDrYA1e1xG4lV4Inr05TCzIzQ6VJcTKudZtY27Kp; DV=UtKgBvHhB6IVLh52YHJ4EGP2UPZItwI; UULE=a+cm9sZToxIHByb2R1Y2VyOjEyIHByb3ZlbmFuY2U6NiB0aW1lc3RhbXA6MTQ5MzExMzE4ODQwOTAwMCBsYXRsbmd7bGF0aXR1ZGVfZTc6MzAyODE4MDY0IGxvbmdpdHVkZV9lNzoxMjAwMTkwNjEyfSByYWRpdXM6MTA3MjYw"
      }
    }
  ]
}

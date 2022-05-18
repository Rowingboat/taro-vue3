export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/owner/index'
  ],
  subPackages: [
    {
      root: 'owner',
      pages: [
        "comments/index"
      ]
    }
  ],
  permission: {
    "scope.userLocation": {
      desc: "你的位置信息将用于匹配您的服务城市"
    }
  },
  tabBar: {
    textColor: "#999999",
    selectedColor: "#0CB076",
    backgroundColor: "#ffffff",
    items: [
      // 引入路径会出现问题，临时使用base64
      {
        icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAYAAADFeBvrAAAAAXNSR0IArs4c6QAAA0FJREFUaAXtWb+LE1EQTrKX3AWNnK3WAU9NyCUpRAtrCzutLQQRGxs5TogcWKqFhY2C4h9whWDpdafY5IeCAb2gAQNCmsTAaWIwG7+J7nFsdncmb9csHC+wvN33Zr6Zb+btzO4mEtE/HQEdAR2BgxyBaFDkms3mUqfTeTgej08BU4wbjUZN6GwVi8W7QfgiNswZK5fLVyDznJNzWzcMYxW/d27r0vkFqSDJ1ev1xHA4PInTQ5Yeorubz+ff43rZmlMcJ/q1Wu0s9CeBBnYXJD9SFqWYIkIAXqhWq6XBYLCO80UbeA3Xeduc8qVpmtuwEbMAYLeL4xaC9sya8xr3FL2EiAyMbDiQ8VILZA02j4LkU/hwSQLIEqJtBqB1Cdj/lAGpDQk+S4juGUlmsM9/Swy6yYxGI05/pdFo2Lf7FBxLCBp7BWBKe98EqtQrkOrum5rldCeZTHIVzuj1ekscqKgoMCBHaD2Xy+20Wq3j7Xb7GIiJ20E8HjczmcxXyjC29+F+vy8JsqtLrGGU0XPYDq9dEbAAZ+5hW75ElsTl1QEvATs3MH/ZYc2aWkYD7lkXTmMQGYqAzBrA1+CQk425zvlK71w9FRrThISBCk1MZyi00AsNB1LlULbHQnsiMVRNtp24AfkiFIvF7qRSqfvpdPqXm4FZ5/FeFUeAroHUo1l1SZ6NhFtjhVETj/SLGLlnMBW/IpVKpQtS9ncstrEqFwUYi+GR/oKSt4wSBdGBDKP1d9nXlgPEC0TyA4wPRNZkQvQIdFomOi3lixBlCZDZadjwZpS3XHgue1vWhLzjE/6qr3von/sjlO7A3htwXxrApUPp55fQ7UKh8CDIXkSE0A6uYnyswkj5HqLGGjQZIkDZBu4TjN/nSohKNiJ5UcUopwPc88C3PyVwapN1v1tuE431E4wH2ljxDe6EyHsHIV+EKEvAXHHADW1K+R4KzWPGsCbEBCj0ZZ2h0FPAOMBmCCW0zWDMa/knGu4uZ4wlhNfsz+ja3zigOay/oacIzg5LCCD0Rec6DhaMM6a6Dh9+4Lgp0Wc/klggeCI4g0ZaAvAqRtF/Rpau6ghb9KHkbSKRKGWz2S+qOFpPR0BHQEfg4ETgD8QcIDG9yOTxAAAAAElFTkSuQmCC',
        activeIcon: `data:image/png;base64,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`,
        pagePath: "pages/index/index",
        name: "首页"
      },
      {
        icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAYAAADFeBvrAAAAAXNSR0IArs4c6QAABEZJREFUaAXtmE1IVFEUx5sPzYoYMqIMCiYXfVg4o0O1KCiKWhSWi1pEgREtoloHrY0+oKxFrapVWKtABqJ1REHMhzKYmJGBfWikJlZ+jKP9rpk58ubNuXPfWNQ8mHnvnvu//3P+59z37n1v3rzCUchAIQOFDPzLGXDlQ1xHR8f8wcHB/RMTEwfgr+a3kutizh/5tbvd7rDH43lYWVn5ibajh+OCYrHYsfHx8XqiXG0Xqcvl+obIhqKioksI+2aH1elzTFBnZ2dJb2/vHZwf0QkAbIJq1QSDwbea4yzhbkurppFMe/v6+sIM0xWjPG1KpVLPE4nEKk23lnBHBEWj0auI2m3pQWZcMTIy0qTuPRk8M8pYUHNzc5D74WxmF+Ke4MDAgDGPsaCxsbF6quPIvUhizre0tCwSp8ACaCSotbW1FM49Frw5mUjMEhK0N6fBU4OMBDHvlRivSQAWY/dZ2MQmI0FktFzsSQ404jQSRIwr5HHKkCTJiNNIEM6/ysKUo3gwGHEazX/2ZB/Y5thF202n+k0fBOwiERsxeKaN6Rcf0pt6LSNBBPbMxl1jdXX1URX/bEwkEjmF7dZsu2pn4bQakmYzmnIEHIWtK43xd2ODlRjVjT30G5Z+RV9TukWvZSRIuWLaXc/gMsCWqIGMp00tbMfB11mNQcxjktRm1Se1Ga/wav/FluUlDtdYOSVIFWAYYSNc7+C83QqHbYzkhKqqqloy9IvMxoKUl3g8HuDh8JRgc962IPYM1bkpitoGZDzlFDfvMs0EdIhfro/ceifEqFgcqZAiUgcby43JZPIBlxWThix/JKCfqp4JhUKNWaDibkcFKa8E6GEK1jEFT9MMZojkHfZ7vKleprpfMmByMjsuaGYUrDerqcLkRxLsxVx/5MZvDwQC8Zk4J68dF9TV1bWgv7+/jEotzBJokir2/HUVInAvX3pqCL6W317ay7IImd09ROWeYAyXlJTcr6io6JsN0GkbVYhFshYBF3G4VsepDXYAcVdKS0uv+f3+YRtcxq6cBHFvFOH4JmJOZmQ26IA76vV6D/K9Tj08tA5tQbx2Fw8PDz9CzC4tT/rgHoRtY316rTNUe2EdGhq6NQdilIbl+AkzG3x5E8Q9cxjyEzoODLHrGH9Dh0M85dR9A7HaaJbrODDFMu3GqVSA3URCwqUz5Q7NtRglADFuRJ2TiFEYHUFqnfkjB6L2T82QrP51BBl9AMwaiT3AR5W22kN+9ooEtbW1LQW+WEKYLwyC/BJukaDR0dEyCVmeMaIYRIJYtT/nOVgJvSgGkSA2jN2U/L3Eax4xEQm3SNAU0W0JYT4wJPM5rxnOrkM8Oi8QbCwfAWfh/M6bbR2ibD/R/uIQV4iVOunz+XZCfPfX4Dk4v+D+3cwb7iupL/HWZyYhe7r1tLdQNfWNWm2JHDtIGLQTbzjH+Ub3jHPKMfICUSEDhQz8fxn4Ae9AWRbHFRVoAAAAAElFTkSuQmCC',
        activeIcon: `data:image/png;base64,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`,
        pagePath: "pages/owner/index",
        name: "我的"
      }
    ]
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
})
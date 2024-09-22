/* eslint-disable prettier/prettier */


export const TEMPLATE_SEND_EMAIL_RESET_PASSWORD = ({token, link}:{token?:string , link?: string } ) => {
  return `
   <!doctype html>
<html>
  <head>
    <meta name="viewport" content="width=device-width" />
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <title>Simple Responsive HTML Email With Button</title>
    <style>
    body {
  background-color: #eaebed;
  font-family: sans-serif;
  -webkit-font-smoothing: antialiased;
  font-size: 14px;
  line-height: 1.4;
  margin: 0;
  padding: 0;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%; 
}

table {
  border-collapse: separate;
  mso-table-lspace: 0pt;
  mso-table-rspace: 0pt;
  min-width: 100%;
  width: 100%; }
  table td {
    font-family: sans-serif;
    font-size: 14px;
    vertical-align: top; 
}



.body {
  background-color: #eaebed;
  width: 100%; 
}

.content {
  box-sizing: border-box;
  display: block;
  Margin: 0 auto;
  max-width: 580px;
  padding: 10px; 
}

.main {
  background: #ffffff;
  border-radius: 3px;
  width: 100%; 
}

.header {
  padding: 20px 0;
}

.wrapper {
  box-sizing: border-box;
  padding: 20px; 
}

.content-block {
  padding-bottom: 10px;
  padding-top: 10px;
}

.footer {
  clear: both;
  Margin-top: 10px;
  text-align: center;
  width: 100%; 
}



h1,
h2,
h3,
h4 {
  color: #06090f;
  font-family: sans-serif;
  font-weight: 400;
  line-height: 1.4;
  margin: 0;
  margin-bottom: 30px; 
}

h1 {
  font-size: 35px;
  font-weight: 300;
  text-align: center;
  text-transform: capitalize; 
}

p,
ul,
ol {
  font-family: sans-serif;
  font-size: 14px;
  font-weight: normal;
  margin: 0;
  margin-bottom: 15px; 
}
  p li,
  ul li,
  ol li {
    list-style-position: inside;
    margin-left: 5px; 
}

a {
  color: #ec0867;
  text-decoration: underline; 
}


.btn {
  box-sizing: border-box;
  width: 100%; }
  .btn > tbody > tr > td {
    padding-bottom: 15px; }
  .btn table {
    min-width: auto;
    width: auto; 
}
  .btn table td {
    background-color: #ffffff;
    border-radius: 5px;
    text-align: center; 
}
  .btn a {
    background-color: #ffffff;
    border: solid 1px #ec0867;
    border-radius: 5px;
    box-sizing: border-box;
    color: #ec0867;
    cursor: pointer;
    display: inline-block;
    font-size: 14px;
    font-weight: bold;
    margin: 0;
    padding: 12px 25px;
    text-decoration: none;
    text-transform: capitalize; 
}

.btn-primary table td {
  background-color: #ec0867; 
}

.btn-primary a {
  background-color: #ec0867;
  border-color: #ec0867;
  color: #ffffff; 
}


.last {
  margin-bottom: 0; 
}

.first {
  margin-top: 0; 
}

.align-center {
  text-align: center; 
}

.align-right {
  text-align: right; 
}

.align-left {
  text-align: left; 
}

.clear {
  clear: both; 
}

.mt0 {
  margin-top: 0; 
}

.mb0 {
  margin-bottom: 0; 
}

.preheader {
  color: transparent;
  display: none;
  height: 0;
  max-height: 0;
  max-width: 0;
  opacity: 0;
  overflow: hidden;
  mso-hide: all;
  visibility: hidden;
  width: 0; 
}

.powered-by a {
  text-decoration: none; 
}

hr {
  border: 0;
  border-bottom: 1px solid #f6f6f6;
  Margin: 20px 0; 
}



@media only screen and (max-width: 620px) {
  table[class=body] h1 {
    font-size: 28px !important;
    margin-bottom: 10px !important; 
  }
  table[class=body] p,
  table[class=body] ul,
  table[class=body] ol,
  table[class=body] td,
  table[class=body] span,
  table[class=body] a {
    font-size: 16px !important; 
  }
  table[class=body] .wrapper,
  table[class=body] .article {
    padding: 10px !important; 
  }
  table[class=body] .content {
    padding: 0 !important; 
  }
  table[class=body] .container {
    padding: 0 !important;
    width: 100% !important; 
  }
  table[class=body] .main {
    border-left-width: 0 !important;
    border-radius: 0 !important;
    border-right-width: 0 !important; 
  }
  table[class=body] .btn table {
    width: 100% !important; 
  }
  table[class=body] .btn a {
    width: 100% !important; 
  }
  table[class=body] .img-responsive {
    height: auto !important;
    max-width: 100% !important;
    width: auto !important; 
  }
}


@media all {
  .ExternalClass {
    width: 100%; 
  }
  .ExternalClass,
  .ExternalClass p,
  .ExternalClass span,
  .ExternalClass font,
  .ExternalClass td,
  .ExternalClass div {
    line-height: 100%; 
  }
  .apple-link a {
    color: inherit !important;
    font-family: inherit !important;
    font-size: inherit !important;
    font-weight: inherit !important;
    line-height: inherit !important;
    text-decoration: none !important; 
  }
  .btn-primary table td:hover {
    background-color: #d5075d !important; 
  }
  .btn-primary a:hover {
    background-color: #d5075d !important;
    border-color: #d5075d !important; 
  } 
}
    </style>
  </head>
  <body class="">
    <table role="presentation" border="0" cellpadding="0" cellspacing="0" class="body">
      <tr>
        <td>&nbsp;</td>
        <td class="container">
          <div class="header">
            <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
              <tr>
                <td class="align-center" width="100%">
                  <a href="https://postdrop.io"><img src="https://cdn.postdrop.io/starter-templates-v0/postdrop-logo-dark.png" height="40" alt="Xác thực gmail của bạn"></a>
                </td>
              </tr>
            </table>
          </div>
          <div class="content">

            <!-- START CENTERED WHITE CONTAINER -->
            <span class="preheader">This is preheader text. Some clients will show this text as a preview.</span>
            <table role="presentation" class="main">

              <!-- START MAIN CONTENT AREA -->
              <tr>
                <td class="wrapper">
                  <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                    <tr>
                      <td>
                        <p>📬&nbsp;${Boolean(token) ? 'Mã của bạn ở đây. Mã xác thực sẽ hết hạn sau 5 phút' : 'Nhấn vào link này để thay đổi mật khẩu của bạn.'}</p>
                        <table role="presentation" border="0" cellpadding="0" cellspacing="0" class="btn btn-primary">
                          <tbody>
                            <tr>
                              <td align="center">
                                <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                                  <tbody>
                                    <tr>
          
                                      <td > <a href='${link  && link}'>${Boolean(token)?  token :  link}</a> </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                              
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </div>
        </td>
        <td>&nbsp;</td>
      </tr>
    </table>
  </body>
</html>
  `;
}
import nodemailer from "nodemailer";
// Create a transporter using the Gmail service and authentication credentials
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "teacherdigitalagencysystem@gmail.com",
    pass: "dxci zthg vvpb voph",
  },
});

// Export the transporter for use in other files
export default transporter;

export function lectorConfSendClient(
  price_per_hour,
  tellNumm,
  email,
  name,
  label,
  emailClient,
  message,
  place,
  time,
  date
) {
  message = "Lektor ke svému schválení připojil tuto zprávu: " + message;
  const htmlMes = `<div class="body apply-styles" lang="cs">
  <style>
    .apply-styles P {
      margin-top: 0;
      margin-bottom: 0
    }
    body {
      background-color: white;
  }
  </style>
  <table style="margin-right:auto;margin-left:auto;box-sizing:border-box;border-collapse:collapse;border-spacing:0px">
    <tbody>
      <tr>
        <td style="border-bottom:1.5pt solid rgb(116,199,211);padding:0.75pt;width:1007px;height:33.3625px;box-sizing:border-box;word-break:break-word;white-space:normal">
          <p style="text-align:center;margin:0cm 0cm 8pt"><span style="font-family:Arial,Helvetica,sans-serif;font-size:1.33333px;color:rgb(0,0,0);line-height:107%" class="-wm-elementToProof"><br>
            </span></p>
        </td>
      </tr>
      <tr>
        <td style="padding:0.75pt;width:1007px;height:33.3625px;box-sizing:border-box;word-break:break-word;white-space:normal">
          <p class="-wm-elementToProof" style="margin:0cm 0cm 8pt;font-family:'Times New Roman',serif;font-size:12pt">
            <span style="font-family:Arial,Helvetica,sans-serif;font-size:1pt;color:rgb(0,0,0);line-height:107%">&nbsp;</span>
          </p>
        </td>
      </tr>
    </tbody>
  </table>
  <p style="text-align:center;margin:0cm;font-family:Arial,Helvetica,sans-serif;font-size:12pt;color:rgb(0,0,0)">
    Vážený zákazníku,</p>
  <p style="text-align:center;margin:0cm;font-family:Arial,Helvetica,sans-serif;font-size:12pt;color:rgb(0,0,0)">
    <br>
    <br>
  </p>
  <p class="-wm-elementToProof" style="text-align:center;margin:0cm;font-family:Arial,Helvetica,sans-serif;font-size:12pt;color:rgb(0,0,0)">
   Lektor schválil Vaši schůzku z ${date} od ${time}. Bude se odehrávat v ${place}</p>
  <p class="-wm-elementToProof" style="text-align:center;margin:0cm;font-family:Arial,Helvetica,sans-serif;font-size:12pt;color:rgb(0,0,0)">
    ${message}</p>
  <p class="-wm-elementToProof" style="text-align:center;margin:0cm;font-family:Arial,Helvetica,sans-serif;font-size:12pt;color:rgb(0,0,0)">
    <br>
  </p>
  <p style="text-align:center;margin:0cm;font-family:Arial,Helvetica,sans-serif;font-size:12pt;color:rgb(0,0,0)">
    &nbsp;</p>
  <p style="text-align:center;margin:0cm;font-family:Arial,Helvetica,sans-serif;font-size:12pt;color:rgb(0,0,0)">
    Přejeme pěkný den.</p>
  <table style="margin-right:auto;margin-left:auto;box-sizing:border-box;border-collapse:collapse;border-spacing:0px;width:1010px;height:92.7875px">
    <tbody>
      <tr>
        <td style="border-bottom:1.5pt solid rgb(116,199,211);padding:0.75pt;width:1010px;height:60.925px;box-sizing:border-box;word-break:break-word;white-space:normal">
          <p class="-wm-elementToProof" style="text-align:center;margin:0cm 0cm 8pt;font-family:'Times New Roman',serif;font-size:12pt">
            <span style="font-family:Arial,Helvetica,sans-serif;color:rgb(0,0,0)">Vaše TDA.</span><span style="font-family:Arial,Helvetica,sans-serif;font-size:1pt;color:rgb(0,0,0);line-height:107%">&nbsp;</span>
          </p>
          <p class="-wm-elementToProof" style="text-align:center;margin:0cm 0cm 8pt;font-family:'Times New Roman',serif;font-size:12pt">
            <span style="font-family:Arial,Helvetica,sans-serif;font-size:1pt;color:rgb(0,0,0);line-height:107%"><br>
            </span>
          </p>
          <p class="-wm-elementToProof" style="text-align:center;margin:0cm 0cm 8pt"><span style="font-family:Arial,Helvetica,sans-serif;font-size:1pt;color:rgb(0,0,0);line-height:107%"><img style="max-width:1995px;margin-top:0px;margin-bottom:0px" id="-wm-image_1" data-szn-src="cid:0c286131-2a87-4420-8c2c-483c473d14d3"  data-szn-src="cid:62a52746-0f4e-461f-9aad-1db8287de3a7" src="https://raw.githubusercontent.com/AM1k21/RL-Ch-Co/main/images/1.png"></span></p>
          <p class="-wm-elementToProof" style="margin:0cm 0cm 8pt;font-family:'Times New Roman',serif;font-size:12pt">
            <span style="font-family:Arial,Helvetica,sans-serif;font-size:1pt;color:rgb(0,0,0);line-height:107%"><br>
            </span>
          </p>
      </tr>
      <tr>
        <td style="padding:0.75pt;width:1010px;height:31.8625px;box-sizing:border-box;word-break:break-word;white-space:normal">
          <p style="margin:0cm 0cm 8pt;font-family:'Times New Roman',serif;font-size:12pt">
            <span style="font-family:Arial,Helvetica,sans-serif;font-size:1pt;color:rgb(0,0,0);line-height:107%">&nbsp;</span>
          </p>
        </td>
      </tr>
    </tbody>
  </table>
  <p class="-wm-elementToProof" style="text-align:center;margin:0cm 0cm 8pt;font-family:Arial,Helvetica,sans-serif;color:rgb(0,0,0)">
    <span style="font-size:12pt;line-height:107%">Teacher Digital Academy <a href="http://www.tda.cz" title="http://www.tda.cz" aria-label="http://www.tda.cz" target="_blank" rel="noopener">www.tda.cz</a></span>
  </p>
  <div class="-wm-elementToProof" style="text-align:center;font-family:Arial,Helvetica,sans-serif;font-size:12pt;color:rgb(0,0,0)">
    <span style="font-size:9pt;color:rgb(116,199,211);line-height:107%">Tento e-mail je automaticky vygenerován. Není určen k reakci. Byl vytvořen s cílem informovat zákazníka pod emailovou adresou: ${emailClient}.</span>
  </div>
  <div class="-wm-elementToProof" style="text-align:center;font-family:Arial,Helvetica,sans-serif;font-size:12pt;color:rgb(0,0,0)">
    <span style="font-size:9pt;color:rgb(116,199,211);line-height:107%"><br>
    </span>
  </div>
  <div class="-wm-elementToProof" style="text-align:center"><span style="font-family:Arial,Helvetica,sans-serif;font-size:1.33333px;color:rgb(0,0,0);line-height:107%"><img id="-wm-image_2" width="666" height="72" src="https://raw.githubusercontent.com/AM1k21/RL-Ch-Co/main/images/2.png"></span></div>
  <div class="-wm-elementToProof" style="text-align:center;font-family:Arial,Helvetica,sans-serif;font-size:12pt;color:rgb(0,0,0)">
    <span style="font-size:9pt;color:rgb(116,199,211);line-height:107%"><br>
    </span>
  </div>
  <div class="-wm-elementToProof" style="text-align:center"><span style="font-family:Arial,sans-serif;font-size:9pt;color:rgb(0,0,0);line-height:107%"><br>
    </span></div>
  <div class="-wm-elementToProof"><span style="font-family:Arial,sans-serif;font-size:9pt;color:rgb(0,0,0);line-height:107%"><br>
    </span></div>

  <p class="-wm-elementToProof" style="margin-top:0px;margin-bottom:0px"><span style="font-family:Arial,Helvetica,sans-serif;font-size:12pt;color:rgb(51,51,51);line-height:107%"><br>
    </span></p>
  <table style="background-color:white;border-collapse:collapse;border-spacing:0px;box-sizing:border-box;width:542px;height:181px" id="-wm-table_0">
    <tbody>
      <tr>
        <td rowspan="3" style="padding:0.75pt 9.75pt 0.75pt 0.75pt;vertical-align:top;width:151px;height:181px;box-sizing:border-box;word-break:break-word;white-space:normal">
          <p class="-wm-elementToProof" style="line-height:normal;margin:0cm"><span style="font-family:Arial,Helvetica,sans-serif;font-size:12pt;color:rgb(36,36,36)"><img id="-wm-image_0" width="137" height="91" style="width:137px;height:91px;margin-top:0px;margin-bottom:0px" data-szn-src="cid:430ae533-ba75-4bda-921c-a50b9ce37e99" src="https://raw.githubusercontent.com/AM1k21/RL-Ch-Co/main/images/3.png"></span></p>
        </td>
        <td style="padding:0.75pt 0.75pt 3.75pt 9.75pt;width:391px;box-sizing:border-box;word-break:break-word;white-space:normal;height:53.875px">
          <p class="-wm-elementToProof" style="line-height:normal;margin:0cm;font-family:Calibri,sans-serif">
            <span style="font-family:Arial,Helvetica,sans-serif;font-size:14pt;color:rgb(0,0,0)"><b>Jakub Jakůbek</b></span>
          </p>
          <p class="-wm-elementToProof" style="line-height:normal;margin:0cm;font-family:Calibri,sans-serif">
            <span style="font-family:Arial,Helvetica,sans-serif;font-size:12pt;color:rgb(0,0,0)">správce systému</span>
          </p>
        </td>
      </tr>
      <tr>
        <td style="padding:0.75pt 0.75pt 3.75pt 9.75pt;width:391px;box-sizing:border-box;word-break:break-word;white-space:normal;height:75.9875px">
          <p class="-wm-elementToProof" style="line-height:normal;margin:0cm;font-family:Calibri,sans-serif">
            <span style="font-family:Arial,Helvetica,sans-serif;font-size:12pt;color:rgb(116,199,211)"><b>Tel. č.:</b>&nbsp;735 726 960</span>
          </p>
          <p class="-wm-elementToProof" style="line-height:normal;margin:0cm;font-family:Calibri,sans-serif">
            <span style="font-family:Arial,Helvetica,sans-serif;font-size:12pt;color:rgb(116,199,211)"><b>jakubakubek@gmail.com:</b>&nbsp;</span>
          </p>
        
        </td>
      </tr>
      <tr>
        <td style="padding:0.75pt 0.75pt 3.75pt 9.75pt;width:391px;box-sizing:border-box;word-break:break-word;white-space:normal;height:51.1375px">
          <p style="line-height:normal;margin:0cm;font-family:Calibri,sans-serif"><span style="font-family:Arial,Helvetica,sans-serif;font-size:12pt;color:rgb(116,199,211)">Teacher Digital Academy</span></p>
          <p style="line-height:normal;margin:0cm;font-family:Calibri,sans-serif"><span style="font-family:Arial,Helvetica,sans-serif;font-size:12pt;color:rgb(116,199,211)"><a href="http://www.tda.cz" title="http://www.tda.cz" aria-label="http://www.tda.cz" target="_blank" rel="noopener">www.tda.cz</a></span></p>
        </td>
      </tr>
    </tbody>
  </table>
  <div class="-wm-elementToProof" style="margin:0cm"><span style="font-family:Arial,Helvetica,sans-serif;font-size:12pt;color:rgb(0,0,0)"><br>
    </span></div>
  <div id="-wm-Signature"></div>
</div>`;
  const mailOptions = {
    from: "teacherdigitalagencysystem@gmail.com",
    to: emailClient,
    subject: "Your reservation",
    text: "Hello world?", // Plain text content
    html: htmlMes, // HTML content
  };

  // Send the email using the transporter and specified mail options
  transporter.sendMail(mailOptions, (error, info) => {
    // Check for errors during the email sending process
    if (error) {
      return console.error(error);
    }

    // If no errors, log the message ID indicating successful sending
    console.log("Message sent: %s", info.messageId);
  });
}

export function lectorSendMessageClient(
  price_per_hour,
  tellNumm,
  email,
  name,
  label,
  emailClient,
  message,
  place,
  time,
  date
) {
  message = "Zpráva od Lektora: " + message;
  const htmlMes = `<div class="body apply-styles" lang="cs">
  <style>
    .apply-styles P {
      margin-top: 0;
      margin-bottom: 0
    }
    body {
      background-color: white;
  }
  </style>
  <table style="margin-right:auto;margin-left:auto;box-sizing:border-box;border-collapse:collapse;border-spacing:0px">
    <tbody>
      <tr>
        <td style="border-bottom:1.5pt solid rgb(116,199,211);padding:0.75pt;width:1007px;height:33.3625px;box-sizing:border-box;word-break:break-word;white-space:normal">
          <p style="text-align:center;margin:0cm 0cm 8pt"><span style="font-family:Arial,Helvetica,sans-serif;font-size:1.33333px;color:rgb(0,0,0);line-height:107%" class="-wm-elementToProof"><br>
            </span></p>
        </td>
      </tr>
      <tr>
        <td style="padding:0.75pt;width:1007px;height:33.3625px;box-sizing:border-box;word-break:break-word;white-space:normal">
          <p class="-wm-elementToProof" style="margin:0cm 0cm 8pt;font-family:'Times New Roman',serif;font-size:12pt">
            <span style="font-family:Arial,Helvetica,sans-serif;font-size:1pt;color:rgb(0,0,0);line-height:107%">&nbsp;</span>
          </p>
        </td>
      </tr>
    </tbody>
  </table>
  <p style="text-align:center;margin:0cm;font-family:Arial,Helvetica,sans-serif;font-size:12pt;color:rgb(0,0,0)">
    Vážený zákazníku,</p>
  <p style="text-align:center;margin:0cm;font-family:Arial,Helvetica,sans-serif;font-size:12pt;color:rgb(0,0,0)">
    <br>
    <br>
  </p>
  <p class="-wm-elementToProof" style="text-align:center;margin:0cm;font-family:Arial,Helvetica,sans-serif;font-size:12pt;color:rgb(0,0,0)">
   Lektor vám posílá zprávu k Vaší schůzce z ${date} od ${time}. Bude se odehrávat v ${place}</p>
  <p class="-wm-elementToProof" style="text-align:center;margin:0cm;font-family:Arial,Helvetica,sans-serif;font-size:12pt;color:rgb(0,0,0)">
    ${message}</p>
  <p class="-wm-elementToProof" style="text-align:center;margin:0cm;font-family:Arial,Helvetica,sans-serif;font-size:12pt;color:rgb(0,0,0)">
    <br>
  </p>
  <p style="text-align:center;margin:0cm;font-family:Arial,Helvetica,sans-serif;font-size:12pt;color:rgb(0,0,0)">
    &nbsp;</p>
  <p style="text-align:center;margin:0cm;font-family:Arial,Helvetica,sans-serif;font-size:12pt;color:rgb(0,0,0)">
    Přejeme pěkný den.</p>
  <table style="margin-right:auto;margin-left:auto;box-sizing:border-box;border-collapse:collapse;border-spacing:0px;width:1010px;height:92.7875px">
    <tbody>
      <tr>
        <td style="border-bottom:1.5pt solid rgb(116,199,211);padding:0.75pt;width:1010px;height:60.925px;box-sizing:border-box;word-break:break-word;white-space:normal">
          <p class="-wm-elementToProof" style="text-align:center;margin:0cm 0cm 8pt;font-family:'Times New Roman',serif;font-size:12pt">
            <span style="font-family:Arial,Helvetica,sans-serif;color:rgb(0,0,0)">Vaše TDA.</span><span style="font-family:Arial,Helvetica,sans-serif;font-size:1pt;color:rgb(0,0,0);line-height:107%">&nbsp;</span>
          </p>
          <p class="-wm-elementToProof" style="text-align:center;margin:0cm 0cm 8pt;font-family:'Times New Roman',serif;font-size:12pt">
            <span style="font-family:Arial,Helvetica,sans-serif;font-size:1pt;color:rgb(0,0,0);line-height:107%"><br>
            </span>
          </p>
          <p class="-wm-elementToProof" style="text-align:center;margin:0cm 0cm 8pt"><span style="font-family:Arial,Helvetica,sans-serif;font-size:1pt;color:rgb(0,0,0);line-height:107%"><img style="max-width:1995px;margin-top:0px;margin-bottom:0px" id="-wm-image_1" data-szn-src="cid:0c286131-2a87-4420-8c2c-483c473d14d3"  data-szn-src="cid:62a52746-0f4e-461f-9aad-1db8287de3a7" src="https://raw.githubusercontent.com/AM1k21/RL-Ch-Co/main/images/1.png"></span></p>
          <p class="-wm-elementToProof" style="margin:0cm 0cm 8pt;font-family:'Times New Roman',serif;font-size:12pt">
            <span style="font-family:Arial,Helvetica,sans-serif;font-size:1pt;color:rgb(0,0,0);line-height:107%"><br>
            </span>
          </p>
      </tr>
      <tr>
        <td style="padding:0.75pt;width:1010px;height:31.8625px;box-sizing:border-box;word-break:break-word;white-space:normal">
          <p style="margin:0cm 0cm 8pt;font-family:'Times New Roman',serif;font-size:12pt">
            <span style="font-family:Arial,Helvetica,sans-serif;font-size:1pt;color:rgb(0,0,0);line-height:107%">&nbsp;</span>
          </p>
        </td>
      </tr>
    </tbody>
  </table>
  <p class="-wm-elementToProof" style="text-align:center;margin:0cm 0cm 8pt;font-family:Arial,Helvetica,sans-serif;color:rgb(0,0,0)">
    <span style="font-size:12pt;line-height:107%">Teacher Digital Academy <a href="http://www.tda.cz" title="http://www.tda.cz" aria-label="http://www.tda.cz" target="_blank" rel="noopener">www.tda.cz</a></span>
  </p>
  <div class="-wm-elementToProof" style="text-align:center;font-family:Arial,Helvetica,sans-serif;font-size:12pt;color:rgb(0,0,0)">
    <span style="font-size:9pt;color:rgb(116,199,211);line-height:107%">Tento e-mail je automaticky vygenerován. Není určen k reakci. Byl vytvořen s cílem informovat zákazníka pod emailovou adresou: ${emailClient}.</span>
  </div>
  <div class="-wm-elementToProof" style="text-align:center;font-family:Arial,Helvetica,sans-serif;font-size:12pt;color:rgb(0,0,0)">
    <span style="font-size:9pt;color:rgb(116,199,211);line-height:107%"><br>
    </span>
  </div>
  <div class="-wm-elementToProof" style="text-align:center"><span style="font-family:Arial,Helvetica,sans-serif;font-size:1.33333px;color:rgb(0,0,0);line-height:107%"><img id="-wm-image_2" width="666" height="72" src="https://raw.githubusercontent.com/AM1k21/RL-Ch-Co/main/images/2.png"></span></div>
  <div class="-wm-elementToProof" style="text-align:center;font-family:Arial,Helvetica,sans-serif;font-size:12pt;color:rgb(0,0,0)">
    <span style="font-size:9pt;color:rgb(116,199,211);line-height:107%"><br>
    </span>
  </div>
  <div class="-wm-elementToProof" style="text-align:center"><span style="font-family:Arial,sans-serif;font-size:9pt;color:rgb(0,0,0);line-height:107%"><br>
    </span></div>
  <div class="-wm-elementToProof"><span style="font-family:Arial,sans-serif;font-size:9pt;color:rgb(0,0,0);line-height:107%"><br>
    </span></div>

  <p class="-wm-elementToProof" style="margin-top:0px;margin-bottom:0px"><span style="font-family:Arial,Helvetica,sans-serif;font-size:12pt;color:rgb(51,51,51);line-height:107%"><br>
    </span></p>
  <table style="background-color:white;border-collapse:collapse;border-spacing:0px;box-sizing:border-box;width:542px;height:181px" id="-wm-table_0">
    <tbody>
      <tr>
        <td rowspan="3" style="padding:0.75pt 9.75pt 0.75pt 0.75pt;vertical-align:top;width:151px;height:181px;box-sizing:border-box;word-break:break-word;white-space:normal">
          <p class="-wm-elementToProof" style="line-height:normal;margin:0cm"><span style="font-family:Arial,Helvetica,sans-serif;font-size:12pt;color:rgb(36,36,36)"><img id="-wm-image_0" width="137" height="91" style="width:137px;height:91px;margin-top:0px;margin-bottom:0px" data-szn-src="cid:430ae533-ba75-4bda-921c-a50b9ce37e99" src="https://raw.githubusercontent.com/AM1k21/RL-Ch-Co/main/images/3.png"></span></p>
        </td>
        <td style="padding:0.75pt 0.75pt 3.75pt 9.75pt;width:391px;box-sizing:border-box;word-break:break-word;white-space:normal;height:53.875px">
          <p class="-wm-elementToProof" style="line-height:normal;margin:0cm;font-family:Calibri,sans-serif">
            <span style="font-family:Arial,Helvetica,sans-serif;font-size:14pt;color:rgb(0,0,0)"><b>Jakub Jakůbek</b></span>
          </p>
          <p class="-wm-elementToProof" style="line-height:normal;margin:0cm;font-family:Calibri,sans-serif">
            <span style="font-family:Arial,Helvetica,sans-serif;font-size:12pt;color:rgb(0,0,0)">správce systému</span>
          </p>
        </td>
      </tr>
      <tr>
        <td style="padding:0.75pt 0.75pt 3.75pt 9.75pt;width:391px;box-sizing:border-box;word-break:break-word;white-space:normal;height:75.9875px">
          <p class="-wm-elementToProof" style="line-height:normal;margin:0cm;font-family:Calibri,sans-serif">
            <span style="font-family:Arial,Helvetica,sans-serif;font-size:12pt;color:rgb(116,199,211)"><b>Tel. č.:</b>&nbsp;735 726 960</span>
          </p>
          <p class="-wm-elementToProof" style="line-height:normal;margin:0cm;font-family:Calibri,sans-serif">
            <span style="font-family:Arial,Helvetica,sans-serif;font-size:12pt;color:rgb(116,199,211)"><b>jakubakubek@gmail.com:</b>&nbsp;</span>
          </p>
        
        </td>
      </tr>
      <tr>
        <td style="padding:0.75pt 0.75pt 3.75pt 9.75pt;width:391px;box-sizing:border-box;word-break:break-word;white-space:normal;height:51.1375px">
          <p style="line-height:normal;margin:0cm;font-family:Calibri,sans-serif"><span style="font-family:Arial,Helvetica,sans-serif;font-size:12pt;color:rgb(116,199,211)">Teacher Digital Academy</span></p>
          <p style="line-height:normal;margin:0cm;font-family:Calibri,sans-serif"><span style="font-family:Arial,Helvetica,sans-serif;font-size:12pt;color:rgb(116,199,211)"><a href="http://www.tda.cz" title="http://www.tda.cz" aria-label="http://www.tda.cz" target="_blank" rel="noopener">www.tda.cz</a></span></p>
        </td>
      </tr>
    </tbody>
  </table>
  <div class="-wm-elementToProof" style="margin:0cm"><span style="font-family:Arial,Helvetica,sans-serif;font-size:12pt;color:rgb(0,0,0)"><br>
    </span></div>
  <div id="-wm-Signature"></div>
</div>`;
  const mailOptions = {
    from: "teacherdigitalagencysystem@gmail.com",
    to: emailClient,
    subject: "Your reservation",
    text: "Hello world?", // Plain text content
    html: htmlMes, // HTML content
  };

  // Send the email using the transporter and specified mail options
  transporter.sendMail(mailOptions, (error, info) => {
    // Check for errors during the email sending process
    if (error) {
      return console.error(error);
    }

    // If no errors, log the message ID indicating successful sending
    console.log("Message sent: %s", info.messageId);
  });
}

export function sendConfClient(
  price_per_hour,
  tellNumm,
  email,
  name,
  label,
  emailClient,
  time,
  date
) {
  const htmlMes = `<div class="body apply-styles" lang="cs">
  <style>
    .apply-styles P {
      margin-top: 0;
      margin-bottom: 0
    }
    body {
      background-color: white;
  }
  </style>
  <table style="margin-right:auto;margin-left:auto;box-sizing:border-box;border-collapse:collapse;border-spacing:0px">
    <tbody>
      <tr>
        <td style="border-bottom:1.5pt solid rgb(116,199,211);padding:0.75pt;width:1007px;height:33.3625px;box-sizing:border-box;word-break:break-word;white-space:normal">
          <p style="text-align:center;margin:0cm 0cm 8pt"><span style="font-family:Arial,Helvetica,sans-serif;font-size:1.33333px;color:rgb(0,0,0);line-height:107%" class="-wm-elementToProof"><br>
            </span></p>
        </td>
      </tr>
      <tr>
        <td style="padding:0.75pt;width:1007px;height:33.3625px;box-sizing:border-box;word-break:break-word;white-space:normal">
          <p class="-wm-elementToProof" style="margin:0cm 0cm 8pt;font-family:'Times New Roman',serif;font-size:12pt">
            <span style="font-family:Arial,Helvetica,sans-serif;font-size:1pt;color:rgb(0,0,0);line-height:107%">&nbsp;</span>
          </p>
        </td>
      </tr>
    </tbody>
  </table>
  <p style="text-align:center;margin:0cm;font-family:Arial,Helvetica,sans-serif;font-size:12pt;color:rgb(0,0,0)">
    Vážený zákazníku,</p>
  <p style="text-align:center;margin:0cm;font-family:Arial,Helvetica,sans-serif;font-size:12pt;color:rgb(0,0,0)">
    <br>
    <br>
  </p>
  <p class="-wm-elementToProof" style="text-align:center;margin:0cm;font-family:Arial,Helvetica,sans-serif;font-size:12pt;color:rgb(0,0,0)">
    na základě zadání Vašich údajů pro schůzku ${date} od ${time} byl Váš požadavek zaznamenán do systému. O schválení a případných změnách</p>
  <p class="-wm-elementToProof" style="text-align:center;margin:0cm;font-family:Arial,Helvetica,sans-serif;font-size:12pt;color:rgb(0,0,0)">
    schůzky Vás budeme nadále informovat.</p>
  <p class="-wm-elementToProof" style="text-align:center;margin:0cm;font-family:Arial,Helvetica,sans-serif;font-size:12pt;color:rgb(0,0,0)">
    <br>
  </p>
  <p style="text-align:center;margin:0cm;font-family:Arial,Helvetica,sans-serif;font-size:12pt;color:rgb(0,0,0)">
    &nbsp;</p>
  <p style="text-align:center;margin:0cm;font-family:Arial,Helvetica,sans-serif;font-size:12pt;color:rgb(0,0,0)">
    Přejeme pěkný den.</p>
  <table style="margin-right:auto;margin-left:auto;box-sizing:border-box;border-collapse:collapse;border-spacing:0px;width:1010px;height:92.7875px">
    <tbody>
      <tr>
        <td style="border-bottom:1.5pt solid rgb(116,199,211);padding:0.75pt;width:1010px;height:60.925px;box-sizing:border-box;word-break:break-word;white-space:normal">
          <p class="-wm-elementToProof" style="text-align:center;margin:0cm 0cm 8pt;font-family:'Times New Roman',serif;font-size:12pt">
            <span style="font-family:Arial,Helvetica,sans-serif;color:rgb(0,0,0)">Vaše TDA.</span><span style="font-family:Arial,Helvetica,sans-serif;font-size:1pt;color:rgb(0,0,0);line-height:107%">&nbsp;</span>
          </p>
          <p class="-wm-elementToProof" style="text-align:center;margin:0cm 0cm 8pt;font-family:'Times New Roman',serif;font-size:12pt">
            <span style="font-family:Arial,Helvetica,sans-serif;font-size:1pt;color:rgb(0,0,0);line-height:107%"><br>
            </span>
          </p>
          <p class="-wm-elementToProof" style="text-align:center;margin:0cm 0cm 8pt"><span style="font-family:Arial,Helvetica,sans-serif;font-size:1pt;color:rgb(0,0,0);line-height:107%"><img style="max-width:1995px;margin-top:0px;margin-bottom:0px" id="-wm-image_1" data-szn-src="cid:0c286131-2a87-4420-8c2c-483c473d14d3"  data-szn-src="cid:62a52746-0f4e-461f-9aad-1db8287de3a7" src="https://raw.githubusercontent.com/AM1k21/RL-Ch-Co/main/images/1.png"></span></p>
          <p class="-wm-elementToProof" style="margin:0cm 0cm 8pt;font-family:'Times New Roman',serif;font-size:12pt">
            <span style="font-family:Arial,Helvetica,sans-serif;font-size:1pt;color:rgb(0,0,0);line-height:107%"><br>
            </span>
          </p>
      </tr>
      <tr>
        <td style="padding:0.75pt;width:1010px;height:31.8625px;box-sizing:border-box;word-break:break-word;white-space:normal">
          <p style="margin:0cm 0cm 8pt;font-family:'Times New Roman',serif;font-size:12pt">
            <span style="font-family:Arial,Helvetica,sans-serif;font-size:1pt;color:rgb(0,0,0);line-height:107%">&nbsp;</span>
          </p>
        </td>
      </tr>
    </tbody>
  </table>
  <p class="-wm-elementToProof" style="text-align:center;margin:0cm 0cm 8pt;font-family:Arial,Helvetica,sans-serif;color:rgb(0,0,0)">
    <span style="font-size:12pt;line-height:107%">Teacher Digital Academy <a href="http://www.tda.cz" title="http://www.tda.cz" aria-label="http://www.tda.cz" target="_blank" rel="noopener">www.tda.cz</a></span>
  </p>
  <div class="-wm-elementToProof" style="text-align:center;font-family:Arial,Helvetica,sans-serif;font-size:12pt;color:rgb(0,0,0)">
    <span style="font-size:9pt;color:rgb(116,199,211);line-height:107%">Tento e-mail je automaticky vygenerován. Není určen k reakci. Byl vytvořen s cílem informovat zákazníka pod emailovou adresou: ${emailClient}.</span>
  </div>
  <div class="-wm-elementToProof" style="text-align:center;font-family:Arial,Helvetica,sans-serif;font-size:12pt;color:rgb(0,0,0)">
    <span style="font-size:9pt;color:rgb(116,199,211);line-height:107%"><br>
    </span>
  </div>
  <div class="-wm-elementToProof" style="text-align:center"><span style="font-family:Arial,Helvetica,sans-serif;font-size:1.33333px;color:rgb(0,0,0);line-height:107%"><img id="-wm-image_2" width="666" height="72" src="https://raw.githubusercontent.com/AM1k21/RL-Ch-Co/main/images/2.png"></span></div>
  <div class="-wm-elementToProof" style="text-align:center;font-family:Arial,Helvetica,sans-serif;font-size:12pt;color:rgb(0,0,0)">
    <span style="font-size:9pt;color:rgb(116,199,211);line-height:107%"><br>
    </span>
  </div>
  <div class="-wm-elementToProof" style="text-align:center"><span style="font-family:Arial,sans-serif;font-size:9pt;color:rgb(0,0,0);line-height:107%"><br>
    </span></div>
  <div class="-wm-elementToProof"><span style="font-family:Arial,sans-serif;font-size:9pt;color:rgb(0,0,0);line-height:107%"><br>
    </span></div>

  <p class="-wm-elementToProof" style="margin-top:0px;margin-bottom:0px"><span style="font-family:Arial,Helvetica,sans-serif;font-size:12pt;color:rgb(51,51,51);line-height:107%"><br>
    </span></p>
  <table style="background-color:white;border-collapse:collapse;border-spacing:0px;box-sizing:border-box;width:542px;height:181px" id="-wm-table_0">
    <tbody>
      <tr>
        <td rowspan="3" style="padding:0.75pt 9.75pt 0.75pt 0.75pt;vertical-align:top;width:151px;height:181px;box-sizing:border-box;word-break:break-word;white-space:normal">
          <p class="-wm-elementToProof" style="line-height:normal;margin:0cm"><span style="font-family:Arial,Helvetica,sans-serif;font-size:12pt;color:rgb(36,36,36)"><img id="-wm-image_0" width="137" height="91" style="width:137px;height:91px;margin-top:0px;margin-bottom:0px" data-szn-src="cid:430ae533-ba75-4bda-921c-a50b9ce37e99" src="https://media.discordapp.net/attachments/1165409843285340163/1212518759944945694/3.jpg?ex=65f22117&is=65dfac17&hm=a26de17155ef5b423b82fa860d803a4ee99bb79b903f0f6cdd4cef25e6701d10&=&format=webp"></span></p>
        </td>
        <td style="padding:0.75pt 0.75pt 3.75pt 9.75pt;width:391px;box-sizing:border-box;word-break:break-word;white-space:normal;height:53.875px">
          <p class="-wm-elementToProof" style="line-height:normal;margin:0cm;font-family:Calibri,sans-serif">
            <span style="font-family:Arial,Helvetica,sans-serif;font-size:14pt;color:rgb(0,0,0)"><b>Jakub Jakůbek</b></span>
          </p>
          <p class="-wm-elementToProof" style="line-height:normal;margin:0cm;font-family:Calibri,sans-serif">
            <span style="font-family:Arial,Helvetica,sans-serif;font-size:12pt;color:rgb(0,0,0)">správce systému</span>
          </p>
        </td>
      </tr>
      <tr>
        <td style="padding:0.75pt 0.75pt 3.75pt 9.75pt;width:391px;box-sizing:border-box;word-break:break-word;white-space:normal;height:75.9875px">
          <p class="-wm-elementToProof" style="line-height:normal;margin:0cm;font-family:Calibri,sans-serif">
            <span style="font-family:Arial,Helvetica,sans-serif;font-size:12pt;color:rgb(116,199,211)"><b>Tel. č.:</b>&nbsp;735 726 960</span>
          </p>
          <p class="-wm-elementToProof" style="line-height:normal;margin:0cm;font-family:Calibri,sans-serif">
            <span style="font-family:Arial,Helvetica,sans-serif;font-size:12pt;color:rgb(116,199,211)"><b>jakubakubek@gmail.com:</b>&nbsp;</span>
          </p>

        </td>
      </tr>
      <tr>
        <td style="padding:0.75pt 0.75pt 3.75pt 9.75pt;width:391px;box-sizing:border-box;word-break:break-word;white-space:normal;height:51.1375px">
          <p style="line-height:normal;margin:0cm;font-family:Calibri,sans-serif"><span style="font-family:Arial,Helvetica,sans-serif;font-size:12pt;color:rgb(116,199,211)">Teacher Digital Academy</span></p>
          <p style="line-height:normal;margin:0cm;font-family:Calibri,sans-serif"><span style="font-family:Arial,Helvetica,sans-serif;font-size:12pt;color:rgb(116,199,211)"><a href="http://www.tda.cz" title="http://www.tda.cz" aria-label="http://www.tda.cz" target="_blank" rel="noopener">www.tda.cz</a></span></p>
        </td>
      </tr>
    </tbody>
  </table>
  <div class="-wm-elementToProof" style="margin:0cm"><span style="font-family:Arial,Helvetica,sans-serif;font-size:12pt;color:rgb(0,0,0)"><br>
    </span></div>
  <div id="-wm-Signature"></div>
</div>`;
  const mailOptions = {
    from: "teacherdigitalagencysystem@gmail.com",
    to: emailClient,
    subject: "Your reservation",
    text: "Hello world?", // Plain text content
    html: htmlMes, // HTML content
  };

  // Send the email using the transporter and specified mail options
  transporter.sendMail(mailOptions, (error, info) => {
    // Check for errors during the email sending process
    if (error) {
      return console.error(error);
    }

    // If no errors, log the message ID indicating successful sending
    console.log("Message sent: %s", info.messageId);
  });
}
//how to use
/*
import transporter from '$lib/server/nodemailer/nodemailer.js';

// Define the email options, including sender, recipient, subject, text, and HTML content
const mailOptions = {
  from: 'teacherdigitalagencysystem@gmail.com',
  to: 'mikulic.tablet.kluci@gmail.com',
  subject: 'Hello ✔',
  text: 'Hello world?', // Plain text content
  html: '<b>Hello world?</b>', // HTML content
};

// Send the email using the transporter and specified mail options
transporter.sendMail(mailOptions, (error, info) => {
  // Check for errors during the email sending process
  if (error) {
    return console.error(error);
  }
  
  // If no errors, log the message ID indicating successful sending
  console.log('Message sent: %s', info.messageId);
});
  */
export function lectorDeniedSendClient(
  price_per_hour,
  tellNumm,
  email,
  name,
  label,
  emailClient,
  message,
  place,
  time,
  date
) {
  message = "Lektor ke svému schválení připojil tuto zprávu: " + message;
  const htmlMes = `<div class="body apply-styles" lang="cs">
  <style>
    .apply-styles P {
      margin-top: 0;
      margin-bottom: 0
    }
    body {
      background-color: white;
  }
  </style>
  <table style="margin-right:auto;margin-left:auto;box-sizing:border-box;border-collapse:collapse;border-spacing:0px">
    <tbody>
      <tr>
        <td style="border-bottom:1.5pt solid rgb(116,199,211);padding:0.75pt;width:1007px;height:33.3625px;box-sizing:border-box;word-break:break-word;white-space:normal">
          <p style="text-align:center;margin:0cm 0cm 8pt"><span style="font-family:Arial,Helvetica,sans-serif;font-size:1.33333px;color:rgb(0,0,0);line-height:107%" class="-wm-elementToProof"><br>
            </span></p>
        </td>
      </tr>
      <tr>
        <td style="padding:0.75pt;width:1007px;height:33.3625px;box-sizing:border-box;word-break:break-word;white-space:normal">
          <p class="-wm-elementToProof" style="margin:0cm 0cm 8pt;font-family:'Times New Roman',serif;font-size:12pt">
            <span style="font-family:Arial,Helvetica,sans-serif;font-size:1pt;color:rgb(0,0,0);line-height:107%">&nbsp;</span>
          </p>
        </td>
      </tr>
    </tbody>
  </table>
  <p style="text-align:center;margin:0cm;font-family:Arial,Helvetica,sans-serif;font-size:12pt;color:rgb(0,0,0)">
    Vážený zákazníku,</p>
  <p style="text-align:center;margin:0cm;font-family:Arial,Helvetica,sans-serif;font-size:12pt;color:rgb(0,0,0)">
    <br>
    <br>
  </p>
  <p class="-wm-elementToProof" style="text-align:center;margin:0cm;font-family:Arial,Helvetica,sans-serif;font-size:12pt;color:rgb(0,0,0)">
  lektor bohužel odmítl schůzku z ${date} od ${time}. </p>
  <p class="-wm-elementToProof" style="text-align:center;margin:0cm;font-family:Arial,Helvetica,sans-serif;font-size:12pt;color:rgb(0,0,0)">
    Budeme rádi se podíváte na naše další nabídky</p>
  <p class="-wm-elementToProof" style="text-align:center;margin:0cm;font-family:Arial,Helvetica,sans-serif;font-size:12pt;color:rgb(0,0,0)">
    <br>
  </p>
  <p style="text-align:center;margin:0cm;font-family:Arial,Helvetica,sans-serif;font-size:12pt;color:rgb(0,0,0)">
    &nbsp;</p>
  <p style="text-align:center;margin:0cm;font-family:Arial,Helvetica,sans-serif;font-size:12pt;color:rgb(0,0,0)">
    Přejeme pěkný den.</p>
  <table style="margin-right:auto;margin-left:auto;box-sizing:border-box;border-collapse:collapse;border-spacing:0px;width:1010px;height:92.7875px">
    <tbody>
      <tr>
        <td style="border-bottom:1.5pt solid rgb(116,199,211);padding:0.75pt;width:1010px;height:60.925px;box-sizing:border-box;word-break:break-word;white-space:normal">
          <p class="-wm-elementToProof" style="text-align:center;margin:0cm 0cm 8pt;font-family:'Times New Roman',serif;font-size:12pt">
            <span style="font-family:Arial,Helvetica,sans-serif;color:rgb(0,0,0)">Vaše TDA.</span><span style="font-family:Arial,Helvetica,sans-serif;font-size:1pt;color:rgb(0,0,0);line-height:107%">&nbsp;</span>
          </p>
          <p class="-wm-elementToProof" style="text-align:center;margin:0cm 0cm 8pt;font-family:'Times New Roman',serif;font-size:12pt">
            <span style="font-family:Arial,Helvetica,sans-serif;font-size:1pt;color:rgb(0,0,0);line-height:107%"><br>
            </span>
          </p>
          <p class="-wm-elementToProof" style="text-align:center;margin:0cm 0cm 8pt"><span style="font-family:Arial,Helvetica,sans-serif;font-size:1pt;color:rgb(0,0,0);line-height:107%"><img style="max-width:1995px;margin-top:0px;margin-bottom:0px" id="-wm-image_1" data-szn-src="cid:0c286131-2a87-4420-8c2c-483c473d14d3"  data-szn-src="cid:62a52746-0f4e-461f-9aad-1db8287de3a7" src="https://raw.githubusercontent.com/AM1k21/RL-Ch-Co/main/images/3.png"></span></p>
          <p class="-wm-elementToProof" style="margin:0cm 0cm 8pt;font-family:'Times New Roman',serif;font-size:12pt">
            <span style="font-family:Arial,Helvetica,sans-serif;font-size:1pt;color:rgb(0,0,0);line-height:107%"><br>
            </span>
          </p>
      </tr>
      <tr>
        <td style="padding:0.75pt;width:1010px;height:31.8625px;box-sizing:border-box;word-break:break-word;white-space:normal">
          <p style="margin:0cm 0cm 8pt;font-family:'Times New Roman',serif;font-size:12pt">
            <span style="font-family:Arial,Helvetica,sans-serif;font-size:1pt;color:rgb(0,0,0);line-height:107%">&nbsp;</span>
          </p>
        </td>
      </tr>
    </tbody>
  </table>
  <p class="-wm-elementToProof" style="text-align:center;margin:0cm 0cm 8pt;font-family:Arial,Helvetica,sans-serif;color:rgb(0,0,0)">
    <span style="font-size:12pt;line-height:107%">Teacher Digital Academy <a href="http://www.tda.cz" title="http://www.tda.cz" aria-label="http://www.tda.cz" target="_blank" rel="noopener">www.tda.cz</a></span>
  </p>
  <div class="-wm-elementToProof" style="text-align:center;font-family:Arial,Helvetica,sans-serif;font-size:12pt;color:rgb(0,0,0)">
    <span style="font-size:9pt;color:rgb(116,199,211);line-height:107%">Tento e-mail je automaticky vygenerován. Není určen k reakci. Byl vytvořen s cílem informovat zákazníka pod emailovou adresou: ${emailClient}.</span>
  </div>
  <div class="-wm-elementToProof" style="text-align:center;font-family:Arial,Helvetica,sans-serif;font-size:12pt;color:rgb(0,0,0)">
    <span style="font-size:9pt;color:rgb(116,199,211);line-height:107%"><br>
    </span>
  </div>
  <div class="-wm-elementToProof" style="text-align:center"><span style="font-family:Arial,Helvetica,sans-serif;font-size:1.33333px;color:rgb(0,0,0);line-height:107%"><img id="-wm-image_2" width="666" height="72" src="https://raw.githubusercontent.com/AM1k21/RL-Ch-Co/main/images/2.png"></span></div>
  <div class="-wm-elementToProof" style="text-align:center;font-family:Arial,Helvetica,sans-serif;font-size:12pt;color:rgb(0,0,0)">
    <span style="font-size:9pt;color:rgb(116,199,211);line-height:107%"><br>
    </span>
  </div>
  <div class="-wm-elementToProof" style="text-align:center"><span style="font-family:Arial,sans-serif;font-size:9pt;color:rgb(0,0,0);line-height:107%"><br>
    </span></div>
  <div class="-wm-elementToProof"><span style="font-family:Arial,sans-serif;font-size:9pt;color:rgb(0,0,0);line-height:107%"><br>
    </span></div>

  <p class="-wm-elementToProof" style="margin-top:0px;margin-bottom:0px"><span style="font-family:Arial,Helvetica,sans-serif;font-size:12pt;color:rgb(51,51,51);line-height:107%"><br>
    </span></p>
  <table style="background-color:white;border-collapse:collapse;border-spacing:0px;box-sizing:border-box;width:542px;height:181px" id="-wm-table_0">
    <tbody>
      <tr>
        <td rowspan="3" style="padding:0.75pt 9.75pt 0.75pt 0.75pt;vertical-align:top;width:151px;height:181px;box-sizing:border-box;word-break:break-word;white-space:normal">
          <p class="-wm-elementToProof" style="line-height:normal;margin:0cm"><span style="font-family:Arial,Helvetica,sans-serif;font-size:12pt;color:rgb(36,36,36)"><img id="-wm-image_0" width="137" height="91" style="width:137px;height:91px;margin-top:0px;margin-bottom:0px" data-szn-src="cid:430ae533-ba75-4bda-921c-a50b9ce37e99" src="https://raw.githubusercontent.com/AM1k21/RL-Ch-Co/main/images/3.png"></span></p>
        </td>
        <td style="padding:0.75pt 0.75pt 3.75pt 9.75pt;width:391px;box-sizing:border-box;word-break:break-word;white-space:normal;height:53.875px">
          <p class="-wm-elementToProof" style="line-height:normal;margin:0cm;font-family:Calibri,sans-serif">
            <span style="font-family:Arial,Helvetica,sans-serif;font-size:14pt;color:rgb(0,0,0)"><b>Jakub Jakůbek</b></span>
          </p>
          <p class="-wm-elementToProof" style="line-height:normal;margin:0cm;font-family:Calibri,sans-serif">
            <span style="font-family:Arial,Helvetica,sans-serif;font-size:12pt;color:rgb(0,0,0)">správce systému</span>
          </p>
        </td>
      </tr>
      <tr>
        <td style="padding:0.75pt 0.75pt 3.75pt 9.75pt;width:391px;box-sizing:border-box;word-break:break-word;white-space:normal;height:75.9875px">
          <p class="-wm-elementToProof" style="line-height:normal;margin:0cm;font-family:Calibri,sans-serif">
            <span style="font-family:Arial,Helvetica,sans-serif;font-size:12pt;color:rgb(116,199,211)"><b>Tel. č.:</b>&nbsp;735 726 960</span>
          </p>
          <p class="-wm-elementToProof" style="line-height:normal;margin:0cm;font-family:Calibri,sans-serif">
            <span style="font-family:Arial,Helvetica,sans-serif;font-size:12pt;color:rgb(116,199,211)"><b>jakubakubek@gmail.com:</b>&nbsp;</span>
          </p>
         
        </td>
      </tr>
      <tr>
        <td style="padding:0.75pt 0.75pt 3.75pt 9.75pt;width:391px;box-sizing:border-box;word-break:break-word;white-space:normal;height:51.1375px">
          <p style="line-height:normal;margin:0cm;font-family:Calibri,sans-serif"><span style="font-family:Arial,Helvetica,sans-serif;font-size:12pt;color:rgb(116,199,211)">Teacher Digital Academy</span></p>
          <p style="line-height:normal;margin:0cm;font-family:Calibri,sans-serif"><span style="font-family:Arial,Helvetica,sans-serif;font-size:12pt;color:rgb(116,199,211)"><a href="http://www.tda.cz" title="http://www.tda.cz" aria-label="http://www.tda.cz" target="_blank" rel="noopener">www.tda.cz</a></span></p>
        </td>
      </tr>
    </tbody>
  </table>
  <div class="-wm-elementToProof" style="margin:0cm"><span style="font-family:Arial,Helvetica,sans-serif;font-size:12pt;color:rgb(0,0,0)"><br>
    </span></div>
  <div id="-wm-Signature"></div>
</div>`;
  const mailOptions = {
    from: "teacherdigitalagencysystem@gmail.com",
    to: emailClient,
    subject: "Your reservation",
    text: "Hello world?", // Plain text content
    html: htmlMes, // HTML content
  };

  // Send the email using the transporter and specified mail options
  transporter.sendMail(mailOptions, (error, info) => {
    // Check for errors during the email sending process
    if (error) {
      return console.error(error);
    }

    // If no errors, log the message ID indicating successful sending
    console.log("Message sent: %s", info.messageId);
  });
}

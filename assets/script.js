function generateSignature() {
    // 1. Collect Input Values Safely
    const firstName = document.getElementById('firstName').value || '';
    const lastName = document.getElementById('lastName').value || '';
    const title = document.getElementById('title').value || '';
    const department = document.getElementById('department').value || '';
    const phone = document.getElementById('phone').value || '';
    const email = document.getElementById('email').value || '';
    const website = document.getElementById('website').value || '';
    const address = document.getElementById('address').value || '';
    const avatarUrl = document.getElementById('avatarUrl').value || '';
    const disclaimer = document.getElementById('disclaimer').value || '';

    // 2. Clear out character definitions for hyperlinks safely beforehand
    const cleanPhoneDigits = phone.replace(/\D/g, '');
    const cleanWebsiteUrl = website.replace(/^(https?:\/\/)?(www\.)?/i, 'www.');

    let disclaimerHtml = '';
    if (disclaimer.trim() !== '') {
        const formattedText = disclaimer.split('\n').join('<br>');
        disclaimerHtml = `
        <table cellpadding="0" cellspacing="0" border="0" style="vertical-align: -webkit-baseline-middle; font-size: medium; font-family: Arial;">
            <tbody>
                <tr>
                    <td colspan="3" style="max-width: 350px; font-size: 11px; color: #777; padding-top: 0.5rem; line-height:1.4;">
                        <div class="legal-content">
                            <p style="font-size: inherit; margin: 0px;">${formattedText}</p>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>`;
    }

    // 3. Construct and injection string mapped directly to the requested template
    const outputHtml = `
<table cellpadding="0" cellspacing="0" border="0" style="vertical-align: -webkit-baseline-middle; font-size: medium; font-family: Arial;">
    <tbody>
        <tr>
            <td>
                <table cellpadding="0" cellspacing="0" border="0" style="vertical-align: -webkit-baseline-middle; font-size: medium; font-family: Arial;">
                    <tbody>
                        <tr>
                            <td style="vertical-align: top;">
                                <table cellpadding="0" cellspacing="0" border="0" style="vertical-align: -webkit-baseline-middle; font-size: medium; font-family: Arial;">
                                    <tbody>
                                        <tr>
                                            <td style="text-align: center;">
                                                <img src="${avatarUrl}" role="presentation" width="130" style="max-width: 128px; display: block;">
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                            <td width="46" aria-label="Vertical Spacer"><div style="width: 46px;"></div></td>
                            <td style="padding: 0px; vertical-align: middle;">
                                <h2 style="margin: 0px; font-size: 18px; font-family: Arial; color: rgb(0, 0, 0); font-weight: 600; line-height: 28px;">
                                    <span>${firstName}</span><span>&nbsp;</span><span>${lastName}</span>
                                </h2>
                                <p style="margin: 0px; color: rgb(0, 0, 0); font-size: 14px; line-height: 22px;"><span>${title}</span></p>
                                <div style="margin: 0px; font-weight: 500; color: rgb(0, 0, 0); font-size: 14px; line-height: 22px;">
                                    <span>${department} </span><span>National Association of Family Services</span>
                                </div>
                                <table cellpadding="0" cellspacing="0" border="0" style="vertical-align: -webkit-baseline-middle; font-size: medium; font-family: Arial; width: 100%;">
                                    <tbody>
                                        <tr><td height="24" aria-label="Horizontal Spacer"></td></tr>
                                        <tr><td width="auto" aria-label="Divider" style="width: 100%; height: 1px; border-bottom: 1px solid rgb(134, 173, 241); border-left-width: medium; border-left-style: none; border-left-color: currentcolor; display: block;"></td></tr>
                                        <tr><td height="24" aria-label="Horizontal Spacer"></td></tr>
                                    </tbody>
                                </table>
                                <table cellpadding="0" cellspacing="0" border="0" style="vertical-align: -webkit-baseline-middle; font-size: medium; font-family: Arial; line-height: 1;">
                                    <tbody>
                                        <tr style="vertical-align: middle; height: 28px;">
                                            <td width="26" style="vertical-align: middle;">
                                                <table cellpadding="0" cellspacing="0" border="0" style="vertical-align: -webkit-baseline-middle; font-size: medium; font-family: Arial; width: 26px;">
                                                    <tbody>
                                                        <tr>
                                                            <td style="vertical-align: bottom;">
                                                                <span style="display: inline-block; background-color: rgb(134, 173, 241);"><img src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/phone-icon-dark-2x.png" alt="mobilePhone" width="18" style="display: block; background-image: linear-gradient(rgb(134, 173, 241), rgb(134, 173, 241));"></span>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                            <td style="padding: 0px; color: rgb(0, 0, 0);">
                                                <a href="tel:${cleanPhoneDigits}" style="text-decoration: none; color: rgb(0, 0, 0); font-size: 14px;"><span>${phone}</span></a>
                                            </td>
                                        </tr>
                                        <tr style="vertical-align: middle; height: 28px;">
                                            <td width="26" style="vertical-align: middle;">
                                                <table cellpadding="0" cellspacing="0" border="0" style="vertical-align: -webkit-baseline-middle; font-size: medium; font-family: Arial; width: 26px;">
                                                    <tbody>
                                                        <tr>
                                                            <td style="vertical-align: bottom;">
                                                                <span style="display: inline-block; background-color: rgb(134, 173, 241);"><img src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/email-icon-dark-2x.png" alt="emailAddress" width="18" style="display: block; background-image: linear-gradient(rgb(134, 173, 241), rgb(134, 173, 241));"></span>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                            <td style="padding: 0px; color: rgb(0, 0, 0);">
                                                <a href="mailto:${email}" style="text-decoration: none; color: rgb(0, 0, 0); font-size: 14px;"><span>${email}</span></a>
                                            </td>
                                        </tr>
                                        <tr style="vertical-align: middle; height: 28px;">
                                            <td width="26" style="vertical-align: middle;">
                                                <table cellpadding="0" cellspacing="0" border="0" style="vertical-align: -webkit-baseline-middle; font-size: medium; font-family: Arial; width: 26px;">
                                                    <tbody>
                                                        <tr>
                                                            <td style="vertical-align: bottom;">
                                                                <span style="display: inline-block; background-color: rgb(134, 173, 241);"><img src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/link-icon-dark-2x.png" alt="website" width="18" style="display: block; background-image: linear-gradient(rgb(134, 173, 241), rgb(134, 173, 241));"></span>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                            <td style="padding: 0px; color: rgb(0, 0, 0);">
                                                <a href="https://${cleanWebsiteUrl}" style="text-decoration: none; color: rgb(0, 0, 0); font-size: 14px;"><span>${website}</span></a>
                                            </td>
                                        </tr>
                                        <tr style="vertical-align: middle; height: 28px;">
                                            <td width="26" style="vertical-align: middle;">
                                                <table cellpadding="0" cellspacing="0" border="0" style="vertical-align: -webkit-baseline-middle; font-size: medium; font-family: Arial; width: 26px;">
                                                    <tbody>
                                                        <tr>
                                                            <td style="vertical-align: bottom;">
                                                                <span style="display: inline-block; background-color: rgb(134, 173, 241);"><img src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/address-icon-dark-2x.png" alt="address" width="18" style="display: block; background-image: linear-gradient(rgb(134, 173, 241), rgb(134, 173, 241));"></span>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                            <td style="padding: 0px; color: rgb(0, 0, 0);">
                                                <span style="font-size: 14px; color: rgb(0, 0, 0);"><span>${address}</span></span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table cellpadding="0" cellspacing="0" border="0" style="vertical-align: -webkit-baseline-middle; font-size: medium; font-family: Arial;">
                                    <tbody>
                                        <tr><td height="24" aria-label="Horizontal Spacer"></td></tr>
                                    </tbody>
                                </table>
                                ${disclaimerHtml}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>
    </tbody>
</table>`;

    document.getElementById('previewContainer').innerHTML = outputHtml;
}

function copySignatureToClipboard() {
    const container = document.getElementById('previewContainer');
    const range = document.createRange();
    range.selectNodeContents(container); 
    
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);

    try {
        document.execCommand('copy');
        alert('Signature copied successfully! Ready to paste into your mail options panel.');
    } catch (err) {
        alert('Unable to auto-copy. Please manually highlight the signature layout in the preview box and press Ctrl+C / Cmd+C.');
    }
    window.getSelection().removeAllRanges();
}

generateSignature();
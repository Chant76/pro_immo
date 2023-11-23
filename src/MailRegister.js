const Mailjet = require('node-mailjet');
module.exports = (user) => {
    if(process.env.MJ_APIKEY_PUBLIC != "" && process.env.MJ_APIKEY_PRIVATE != "" ) {
        const mailjet = new Mailjet({
            apiKey: process.env.MJ_APIKEY_PUBLIC,
            apiSecret: process.env.MJ_APIKEY_PRIVATE
        });

        return mailjet
        .post('send', { version: 'v3.1' })
        .request({
            Messages: [{
                From: {
                    Email: `${process.env.MJ_MAIL_SOCIETE}`,
                    Name: `${process.env.MJ_NOM_SOCIETE}`,
                },
                To: [{
                    Email: `${user.email}`,
                    Name:  `${user.lastname} ${user.firstname}`
                }],
                Subject: "Mail inscription Toitoimontoit",
                TextPart: "Bienvenue sur la plateforme Toitoimontoit ! \n\nVotre compte a bien été créé.",
                HTMLPart: "<h3>Bienvenue sur la plateforme Toitoimontoit!</h3><br /><br/>Votre compte a bien été créé.<br /><br/>Merci de l'interet que vous portez à notre agence<br /><br/>L'équipe de Toitoimontoit"
            }]
        });
    }
}
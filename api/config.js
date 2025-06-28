export default {
    solutionName: "Sendam",
    BaseUrl: "http://localhost:3030",
    puppeteertoPrintPath:"",
    solutionFunctionalEmail: "hello@sendam.com",
    accessTokenExpireIn:"1h",
    otpExpirationMinutes:5,
    loginWith:{
        password:1,
        pin:2
    },
    sendLiveMail: false,
    smtpConnectionInfo: {
        test: {
            host: "smtp.mailtrap.io",
            port: 2525,
            username: "b3b998f2c835ae",
            password: "fdf9fc8958f76e"
        },
        live: {
            host: "mail.usesendam.com",
            port: 26,
            username: "n-reply@usesendam.com",
            password: "Pa55wo0rd12*"
        }
    },
    sendamEmailAddresses:{
        noreply:"no-reply@sendam.com"
    },
    emailTitleSubjects:{
        emailConfirmation:{
            fromTitle:'Dammy from Sendam',
            subject:"Confirm Email - Sendam"
        },
        invoice:{
            fromTitle:'Gigmoni Invoice',
            subject:"Gigmoni - Invoice from"
        }
        
    },
    isDeleted:{
        yes:1,
        no:0
    },
    deleteLabel:"deleted",
    roleNames: {
        customer: "Customer",
        operator:"Operator",
        admin: "Admin",
        settlementOfficer: "sSettlement Officer",
        superAdmin:"Super Admin"
    },
    roleIds: {
        customer:1,
        operator:2,
        settlementOfficer:4,
        admin:4,
        superAdmin:5
    },
    responseStatusMessage:{
        success:"Success.",
        failed:"Failed."
    },
    HTTP_CODES:{
        SUCCESS:200,
        CREATED:201,
        NOT_FOUND:404,
        BAD_REQUEST:400,
        INTERNAL_SERVER_ERROR:500,
        CONFLICT:409,
    },
    RESPONSE_MESSAGES:{
        TRY_AGAIN_LATER:"Some error Occured. Please try again later.",
        ACCOUNT_CREATED:"account successfully created. Please confirm your email address using the OTP(One Time Password) code we sent to your email",
        UNABLE_TO_LOGOUT:"Unable to logout. Please try again later",
        UNABLE_TO_LOGIN:"Unable to log in. Please try again later",
        WRONG_PASSWORD:"Wrong password. Please login with correct password.",
        WRONG_PIN:"Wrong PIN. Please use correct PIN.",
        WRONG_TRANSACTION_PIN:"Wrong transaction PIN. Please use correct PIN.",
        VALID_TRANSACTION_PIN:"Transaction PIN verified.",
        WRONG_EMAIL:"Wrong email. Please login with correct email.",
        ACCOUNT_EXIST:"Account already exists",
        USER_NOT_EXIST:"Account  does not exist. Please signup",
        INVALID_REFFRRAL_CODE:"Invalid or expired referral code",
        EMAIL_ALREADY_EXIST:"Email has been used. Please log in or change password it was used by you in the past.",
        INVALID_EMAIL:"Email does not exist on our solution. Please register to use Sendam",
        PHONE_ALREADY_EXIST:"Phone number has been used by another user",
        NOT_A_USER:"User does not exist",
        USERNAME_ALREADY_EXIST:"email has been used by another user",
        BVN_ALREADY_EXIST:"BVN has been used by another user",
        EMAIL_NOT_VERIFIED:"You are yet to verify your email",
        CONFIRM_EMAIL:"Account found. Please confirm your email address using the OTP(One Time Password) code we sent to your email.",
        UNABLE_TO_VERIFY_EMAIL:"We are unable to verify your email address at the moment. Please try again later",
        EMAIL_VERIFIED:"Bravo! Your email has been verified. Please login to make your first transaction on Sendam",
        PHONE_NOT_VERIFIED:"You are yet to verify your phone number",
        BVN_NOT_VERIFIED:"You are yet to verify your bank verification code(BVN)",
        KYC_NOT_VERIFIED:"You are yet to verify your KYC identity",
        TRANSACTION_PIN_NOT_SET:"You are yet to set your transaction pin",
        PIN_SET:"PIN successully set",
        LOGIN_PIN_NOT_SET:"You are yet to set your login pin",
        INVALID_OTP:"Invalid OTP/Does not exist",
        USED_OTP:"OTP already used",
        EXPIRED_OTP:"OTP has expired",
        OTP_VERIFIED:"OTP verified",
        UNABLE_TO_SEND_OTP_TO_EMAIL:"Unable to send OTP to email. Pleasetry again later",
        WEB_HOOK_RECEIVED:"Webhook successully received",
        SUCCESS:"Success",
        TRANSACTION_CONFIRMED:"Transaction confirmed. Fund received. Commision and other charges applied.",
        TRANSACTION_APPROVED:"Transaction Approved",
        TRANSACTION_CANCELLED:"Transaction Cancelled",
        TRANSACTION_COMPLETED:"Transaction Completed. Settlement made",
        UNABLE_TO_INVOICE:"Unable to send invoice email. Please try again later.",
        INVOICE_SENT:"Invoice successfully sent",
    },
    supportedCountries:{
        NG:"nigeria"
    },
    charges:{
        interPlatformTransaferCommisionPercentage:2,
        interPlatformDisbursementCommisionPercentage:2,
        invoicingFixCommisionInDollars:5,
    },
    taxes:{
        VAT:0,
    },

    transactionStatus:{
        pending:1,
        confirmed:2,
        approved:3,
        completed:4
    },
    recentTransactionLength:20,
    currencyCodes:{
        dollar:"USD",
        naira:"NGN",
        pound:"GBP"
    },
    currencyConversionRateKeys:{
        dollar2naira:"dollar2naira",
        naira2dollar:"naira2dollar",
        dollar2pound:"dollar2pound",
        pound2dollar:"pound2dollar",
        pound2naira:"pound2naira",
        naira2pound:"naira2pound",
        dollar2dollar:"dollar2dollar",
        naira2naira:"naira2naira",
        pound2pound:"pound2pound"
    },
    institutionCodes:{
        paypal:"PYPL",
        payoneer:"PYNR",
        skrill:"SKRL"
    },
    transactionType:{
        walletDeposit:"WD",
        accountDeposit:"AD",
        walletWithdrawal:"WW",
        accountWithdrawal:"AW",
        interPlatformTransfer:"IT",
        interPlatformDisbursement:"ID",
        invoicing:"I"
    },
    transactionNature:{
        walletLevelTransaction:"W",
        accountLevelTransaction:"A",
        interPlatformLevelTransaction:"I",
        paypalInvoicing:"PLI",
        payoneerInvoicing:"PRI",
        skrillInvoicing:"SLI"
    },

    uploadPaths:{
        payscheduleRelativePath:"./files_/pay_schedules",
        payscheduleTemplateURL:"/templates/pay_schedule/gigmoni_pay_schedule"
    },

    payScheduleFileExtensions:{
        csv:"csv",
        exelXLS:"xls",
        exelXLSX:"xlsx"
    },
    gigmoniInvoiceAddresses:{
        paypal:"paypal@gigmoni.com",
        payoneer:"payoneer@gigmoni.com",
        skrill:"skrill@gigmoni.com"
    },
    platformPaymentPages:{
        paypal:"https://www.paypal.com/signin",
        payoneer:"https://login.payoneer.com/",
        skrill:"https://account.skrill.com/wallet/account/login"
    }

}














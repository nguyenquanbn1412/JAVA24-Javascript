function translate(countryCode) {
    switch (countryCode) {
        case 'VN':
            return 'Xin chào';
        case 'EN':
            return 'Hello';
        case 'JP':
            return 'Konnichiwa';//NB
        case 'KR':
            return 'Annyeonghaseyo';//HQ
        case 'CN':
            return 'Nihao';//TQ
        case 'ES':
            return 'Hola';//TBN
        case 'FR':
            return 'Bonjour';//P
        case 'IT':
            return 'Ciao';//Y
        case 'DE': // DUC
        case 'NL': //HL
            return 'Hallo';
        case 'PT':
            return 'Ola';//BDN
        default:
            return 'Hello';
    }
}

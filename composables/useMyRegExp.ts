const mailRegExp = ref(RegExp(/^\w+(\.\w+)*@\w+(\.\w+)*\.[a-zA-Z]{1}[a-zA-Z]+$/ , 'i' )) ;

const passwordRegExp = ref(RegExp(/^\S{5}\S*$/ , 'i'));

const userNameRegExp = ref(RegExp(/^\S{5}\S*$/ , 'i'));

export default function foo () {


    return {
        mailRegExp ,
        passwordRegExp ,
        userNameRegExp ,
    }
}
import enLocale from "element-ui/lib/locale/lang/en"
const en = {
    role: {
        superAdmin: "superAdmin",
        admin: "admin",
        ordinary: "ordinary"
    },
    userDropdownMenu: {
        basicInfor: "basicInfor",
        changePassword: "changePassword",
        logout: "logout"
    },
    ...enLocale //  合并element-ui内置翻译
}

export default en
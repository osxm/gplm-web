import zhLocale from "element-ui/lib/locale/lang/zh-CN"
const zh_CN = {
    role: {
        superAdmin: "超级管理员",
        admin: "管理员",
        ordinary: "普通用户"
    },
    userDropdownMenu: {
        basicInfor: "基本资料",
        changePassword: "修改密码",
        logout: "退出"
    },
    
    ...zhLocale //  合并element-ui内置翻译
}

export default zh_CN
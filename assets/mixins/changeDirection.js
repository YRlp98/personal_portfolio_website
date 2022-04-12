export default {
    methods: {
        changeDirection(language) {
            if (language === "fa") {
                return "rtl";
            } else {
                return "ltr";
            }
        },
    }
}
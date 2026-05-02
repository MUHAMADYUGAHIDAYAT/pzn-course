function register(name, gender = "Unknown") {
    console.log(name);
    console.log(gender)
}

register();
register("Yuga");
register("Yuga", null);
register("Yuga", undefined);
register("Yuga", "Male");

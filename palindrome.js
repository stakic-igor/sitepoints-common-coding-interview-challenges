const palindrome = string => {
    string = string.toLowerCase();
    return (
        string ===
        string
            .split("")
            .reverse()
            .join("")
    );
};

palindrome("racecar");

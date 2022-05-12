function getBotResponse(input) {
    //rock paper scissors
    if (input == "What is meditation") {
        return "The practice of focused concentration, bringing yourself back to the moment over and over again";
    } else if (input == "What is the purpose to meditate") {
        return "Its purpose is to help increase both physical and mental peace and calm";
    } else if (input == "What are the benefits of meditation in my daily life?") {
        return "The mental health benefits of meditation include better focus and concentration, improved self-awareness and self-esteem, lower levels of stress and anxiety, and fostering kindness. Meditation also has benefits for your physical health, as it can improve your tolerance for pain and help fight substance addiction.";
    }
    // Simple responses
    if (input == "hello") {
        return "Hello there!";
    } else if (input == "goodbye") {
        return "Talk to you later!";
    } else {
        return "Try asking something else!";
    }
}
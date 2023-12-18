try {
    //some code goes here
    console.log('Start of try');
    setTimeout(() => {
        blawblaw();
    }, 1000)
    console.log('End of try');
} catch (error) {
    //when error comes
    console.log('Error has occured', error);
} finally {
    console.log('finally called.');
}
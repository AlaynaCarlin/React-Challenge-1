const View = (props) => {

    // let test = 'wassup';

    return(
        <div>
            <h3>Hello {props.nametext} </h3>
            <h3>You are {props.agetext} years old</h3>
            <h3>Your hobbies are {props.hobbiestext}</h3>
        </div>
    );
};

export default View;
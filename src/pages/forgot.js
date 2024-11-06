import React from "react";

const Forgot = () =>{
    return(
        <div>
            <h2>Forgot Password</h2>
            <form>
                <label>
                    Email:
                    <input type="email" name="email" />
                </label>
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>

    );
}
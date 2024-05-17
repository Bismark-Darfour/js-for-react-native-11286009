// userInfo.js

// Function to create user profiles
function createUserProfiles(names, modifiedNames) {
    // Check if the lengths of the arrays match
    if (names.length !== modifiedNames.length) {
        console.error("Arrays must have the same length.");
        return;
    }

    // Initialize an empty array to store user profiles
    let userProfiles = [];

    // Auto-incremented id starting from 1
    let id = 1;

    // Iterate through the arrays to create user profiles
    for (let i = 0; i < names.length; i++) {
        // Create a new user profile object
        let userProfile = {
            originalName: names[i],
            modifiedName: modifiedNames[i],
            id: id++
        };
        // Push the user profile object to the array
        userProfiles.push(userProfile);
    }

    // Return the array of user profiles
    return userProfiles;
}

// Example usage:
const namesArray = ["Kofi", "Kwame", "Kwasi", "Kojo"];
const modifiedNamesArray = ["kOfI", "KWAME", "kWaSi", "kOjO"];
const userProfiles = createUserProfiles(namesArray, modifiedNamesArray);
console.log(userProfiles);

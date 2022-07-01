let paragraph = [
    "A woman finds a pot of treasure on the road while she is returning from work. Delighted with her luck, she decides to keep it. As she is taking it home, it keeps changing. However, her enthusiasm refuses to fade away.",
    "Timmie Willie is a country mouse who is accidentally taken to a city in a vegetable basket. When he wakes up, he finds himself at a party and makes a friend. When he is unable to bear the city life, he returns to his home but invites his friend to the village. When his friend visits him, something similar happens.",
    "Ruskin Bond used to spend his summer at his grandmother’s house in Dehradun. While taking the train, he always had to pass through a small station called Deoli. No one used to get down at the station and nothing happened there. Until one day he sees a girl selling fruit and he is unable to forget her.",
    "This is a humorous story where the speaker explains the office policies, as well as gossip about the staff, to a new employee. It is extremely easy to read as the sentences are short and without any overly difficult words. Many working English learners will relate to it as it explains the absurdities of modern office life and how so little of it makes sense.",
    "The year is 2081 and everyone has been made equal by force. To do this, every person who is superior in any way has been handicapped by the government. Intelligent people are distracted by disturbing noises. Good dancers have to wear weights so that they do not dance too well. Attractive people wear ugly masks so they do not look better than anyone else. However, one day there is a rebellion, and everything changes for a brief instant."
];

let msg = document.getElementById('content');
let typeWord = document.getElementById('typedWord');
let btn = document.getElementById('btn');
let wpm = document.getElementById('wpm');
let start=0, end=0, speed = 0,curr;

let startTyping = () => {
    let index = Math.floor(Math.random() * paragraph.length);
    msg.innerText = paragraph[index];
    // console.log(msg);
    let currDate = new Date();
    start = currDate.getTime();
    btn.innerText = "Done";
    wpm.innerText = "Current Speed : " + speed;
    wpm.style.display = 'flex';
    typeWord.style.display = "flex";
}

 myinterval = setInterval(() => {
    curr = new Date();
    end = curr.getTime();
    speed = Math.floor((end - start) / 1000);
    let userText = typeWord.value;
    let words = userText.split(" ").length;
    speed = Math.floor((words / speed) * 60);
    wpm.innerText = "Current Speed : "+ speed;
}, 1);

function finish() {
    curr = new Date();
    end = curr.getTime();
    speed = Math.floor((end - start) / 1000);
    btn.innerText = 'Start';
    let userText = typeWord.value;
    let words = userText.split(" ").length;
    speed = Math.floor((words / speed) * 60);
    console.log(speed);
    msg.innerText = "You typed total at " + speed + " wpm";
    typeWord.value = "";
    typeWord.style.display = "none";
    wpm.style.display = 'none';
    wpm.innerText = "Current Speed : "+ speed;
}

btn.addEventListener('click', function () {
    if (this.innerText === "Start") {
        typeWord.disabled = false;
        startTyping();
    }
    else {
        typeWord.disabled = true;
        finish();
    }
})

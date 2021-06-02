import ProjectCard from '../components/ProjectCard'

const projects = () => {
    return (
        <div className={`d-flex justify-content-around flex-wrap`}>
            <ProjectCard id='1' image="/projectImages/muscially.png" project="Muscial.ly" description="A fun music kit site, complete with a piano and a drumkit, made in React and JavaScript" skills={["React", "JavaScript"]} url="https://muscially.netlify.app/" dateCompleted="April 2021" detailDescription={`Musical.ly was a fun project I worked on with a partner.. It was initially just meant to be a music kit site where you could play the piano or drums, but after adding the "sheesh" sound to the piano as a joke, we decided to create the "Sheeshano".. The Sheeshano function plays like a normal piano, different keys and all, but the notes are replaced by the "sheesh" sound.. It was a bunch of fun to create and it worked well alongside our Ghost Play feature.. This was a feature we created that allows users to create their own music that will play automatically.`}/>
            <ProjectCard id='2' image="/projectImages/quizgo.png" project="Quizgo" description="A fun quiz game where you can compare your scores with other players made in Django" skills={["Django"]} url="https://quizgo.heroku.app" dateCompleted ="March 2021" detailDescription={`This was a project I worked on with a partner.. It is a quiz game that is built primarily using the Django web framework.. This site allows users to sign up, answer random questions (or random questions from a specific category), earn points and badges, compare your score with others, add friends, and send messages to those friends.`}/>
            <ProjectCard id='3' image="/projectImages/ReactPokeRPS.png" project="Pokemon RPS" description="A turn based, Rock, Paper, Scissors type health depleter game, created with React." skills={["React"]} url="https://react-pokemonrps.netlify.app" dateCompleted="April 2021" detailDescription={`This was a solo project I worked on after finishing ReservME.. I enjoyed working with React before so I decided to remake my first ever project in React.. There were some challenging complications along the way, but I ended up being happy with the end result.. The site runs basically functionally identical to the original project.. The user plays against a computer and depending on who wins the type matchup, the other player loses health.. Once a player reaches 0 health, the game ends and prompts you to play again.`}/>
            <ProjectCard id='4' image="/projectImages/ReservME.png" project="ReservME" description="A mock hotel reservation site created with Next.js" skills={["Next.js"]} url="https://github.com/loveleen-kaur21/ReservMEJs/tree/main/reservme-next-react/pages" dateCompleted="April 2021" detailDescription={`I worked with a partner for one week building this project.. We learned how to use React and Next in one day, and for the rest of the week, worked on ReservME.. This site allows users to view different suites, select which one they would like to reserve, fill out information, and give them a receipt for the reservation.. Unfortunately we were unable to apply a backend to save information to this project due to the time constraint, but everything else worked exactly as planned.`}/>
        </div>
    )
}

export default projects

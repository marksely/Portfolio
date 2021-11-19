import React from "react";

const styles = {
    grid:  {
        display: "flex",
        justifyContent: "center"
    },
    cursor: {
        cursor: "pointer"
    },
    item1: {
        justifyContent: "start",
        alignItems: "flex-end",
        background: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png',
    }
}

const portfolio = () => {
    return (
        <div>
            <section id="work" class="grid">
                <h2 class="workh2">Work</h2>
                <div class="grid-container">
                    <div class="item1 grid" onclick="location.href='https://urbaned0ge.github.io/Musical-Time-Machine/';" style={styles.cursor}>
                        <p class="item-p">HTML, CSS, JavaScript Musical-Time-Machine</p>
                    </div>
                    <div class="item2 grid" onclick="location.href='https://marksely.github.io/Weather-Dashoboard/';" style={styles.cursor}>
                        <p class="item-p">HTML, CSS, JavaScript Weather-Dashboard </p>
                    </div>
                    <div class="item3 grid" onClick="location.href='https://marksely.github.io/Password-Generator/';" style={styles.cursor}>
                        <p class="item-p">HTML, CSS, JavaScript Code-Quiz </p>
                    </div>
                    <div class="item4 grid" onclick="location.href='https://never-alone-project.herokuapp.com/';" style={styles.cursor} >
                        <p class="item-p"> Never Alone Handlebars, Node, Express.js, Sequelize</p>
                    </div>
                    <div class="item5 grid" onclick="location.href='#';" style={styles.cursor}>
                        <p class="item-p">Web  React </p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default portfolio;
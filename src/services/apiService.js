// AIzaSyAXDYuD2upRh13CiXDEe0_nOdnCifusAuM



class ServicesClass {


    getToDoListItems() {
        fetch(`https://www.googleapis.com/discovery/v1/apis/tasks/v1/rest`)
            .then((response) => {
                return response.json()
            }).then((data) => {
                console.log(data)
            })
    }

    getDeleteListItems(tasklist, task) {
        fetch(
            `https://www.googleapis.com/tasks/v1/users/@me/lists/${tasklist}/tasks/${task}`,
            { method: 'DELETE' }
        ).then((val) => {
            return val.json()
        }).then((data) => {
            console.log(data)
        })
    }

    getUpdateListItems(tasklist, task) {
        fetch(
            `https://tasks.googleapis.com/tasks/v1/lists/${tasklist}/tasks/${task}`,
            { method: 'PUT' }
        ).then((val) => {
            return val.json()
        }).then((data) => {
            debugger
            // console.log(data)
        })
    }

    getPostListItems(tasklist) {
        fetch(
            `https://tasks.googleapis.com/tasks/v1/lists/${tasklist}/tasks`,
            { method: 'POST' }
        ).then((val) => {
            return val.json()
        }).then((data) => {
            debugger
            // console.log(data)
        })
    }



}


export let u = new ServicesClass()
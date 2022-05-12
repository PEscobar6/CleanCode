(() => {

    /**
     * Los comentarios no es que sean malos
     */
    
    const temperaturesCelsius = [33.6, 12.34];

    
    const serverIp = '123.123.123.123';

    
    const users = [{id: 1, emailAddress: 'fernando@google.com'},{ id: 2, emailAddress: 'juan@google.com' }, { id: 3, emailAddress: 'melissa@google.com' }];

    const usersEmails = users.map( user => user.emailAddress );

    /**
     * Be so descriptive in the boolean vars
     */
    const canJump = false;
    const canRun = true;
    const hasItems = false;
    const isLoading = true;

    
    const startTime = new Date().getTime();
    //....
    // 3 doritos después
    //...
    const endTime = new Date().getTime() - startTime;


    /**
     * verb + substantive and is optional the complement
     */
    
    function getBooks() {
        throw new Error('Function not implemented.');
    }

    
    function getBooksByUrl( url: string) {
        throw new Error('Function not implemented.');
    }
    
    
    function calculateSquareArea( side: number ) {
        throw new Error('Function not implemented.');
    }

    
    function printJob() {
        throw new Error('Function not implemented.');
    }
})();
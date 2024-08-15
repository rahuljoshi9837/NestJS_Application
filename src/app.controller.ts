import { Controller, Get } from "@nestjs/common";

@Controller('/app')
export class AppController {
    @Get('/hello')
    getRootRoute() {
        return "Hello This is Rahul Joshi !!";
    }

    @Get('/bye')
    getRootBye() {
        return "Bye dear !";
    }
}
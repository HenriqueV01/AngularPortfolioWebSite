export class Tag{
    //Enum
    static readonly ANGULAR = new Tag('Angular', 'darkred');
    static readonly TYPESCRIPT = new Tag('TypeScript', 'darkblue');
    static readonly JAVA = new Tag('Java', 'darkorange');
    static readonly SPRING_BOOT = new Tag('Spring Boot', 'darkgreen');
    static readonly PHYTON = new Tag('Phyton', 'darkviolet');
    static readonly CSHARP = new Tag('C#', 'brown');
    static readonly JAVASCRIPT = new Tag('JavaScript', 'darkpurple');
    static readonly NODEJS = new Tag('Node.Js', 'black');


    constructor(private readonly key: string, public readonly cor: string){}

    toString(){
        return this.key;
    }

}

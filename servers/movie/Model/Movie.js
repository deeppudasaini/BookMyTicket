module.exports=class{
    constructor(obj){
        this.id=obj.id ||null;
        this.title=obj.title ||null;
        this.description=obj.description ||null;
        this.duration=obj.duration ||null;
        this.language=obj.language ||null;
        this.releaseDate=obj.releaseDate ||null;
        this.country=obj.country ||null;
        this.genre=obj.genre ||null;
    }
}
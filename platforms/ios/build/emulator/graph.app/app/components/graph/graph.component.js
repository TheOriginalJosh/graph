"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var GraphComponent = (function () {
    function GraphComponent() {
    }
    GraphComponent.prototype.ngOnInit = function () {
        // console.log(platformModule.screen.mainScreen.widthPixels);
        this.aowAgeItem = this.aowAge.nativeElement;
        this.dragAgeItem = this.dragAge.nativeElement;
        this.dragTargetItem = this.dragTarget.nativeElement;
        this.dragGraphItem = this.draghGraph.nativeElement;
        this.dragGraphItem.setInlineStyle('margin-left: -200');
        this.positionAgeX = this.dragAgeItem.left;
        this.positionTargetY = this.dragTargetItem.top;
    };
    GraphComponent.prototype.onPanGraph = function (args) {
        if (args.state === 1) {
            this.prevDeltaXaow = 0;
            this.prevDeltaXage = 0;
            this.prevDeltaXtarget = 0;
            this.prevDeltaYtarget = 0;
            this.prevDeltaXgraph = 0;
            this.prevDeltaYgraph = 0;
        }
        else if (args.state === 2) {
            // console.log(args.deltaX);
            this.dragGraphItem.translateX += args.deltaX - this.prevDeltaXgraph;
            this.dragGraphItem.translateY = 0;
            this.aowAgeItem.translateX += args.deltaX - this.prevDeltaXaow;
            this.dragAgeItem.translateX += args.deltaX - this.prevDeltaXage;
            this.dragTargetItem.translateX += args.deltaX - this.prevDeltaXtarget;
            this.prevDeltaXaow = args.deltaX;
            this.prevDeltaXage = args.deltaX;
            this.prevDeltaXgraph = args.deltaX;
            this.prevDeltaYgraph = args.deltaY;
            this.prevDeltaXtarget = args.deltaX;
            this.prevDeltaYtarget = args.deltaY;
        }
        else if (args.state === 3) {
        }
    };
    GraphComponent.prototype.onPanTarget = function (args) {
        if (args.state === 1) {
            this.prevDeltaXtarget = 0;
            this.prevDeltaYtarget = 0;
        }
        if (args.state === 2) {
            // args.deltaX = 0;
            this.dragTargetItem.translateX = 0;
            this.dragTargetItem.translateY += args.deltaY - this.prevDeltaYtarget;
            // console.log(args.deltaX);
            // console.log(this.dragItemTargetLeft);
            // console.log(this.dragTargetItem.left);
            this.prevDeltaXtarget = 0;
            this.prevDeltaYtarget = args.deltaY;
        }
        else if (args.state === 3) {
            this.positionTargetY += args.deltaY;
            console.log(this.positionTargetY);
            alert('onPanTarget finished: recalculate, position: ' + this.positionTargetY);
        }
    };
    GraphComponent.prototype.onPanAge = function (args) {
        if (args.state === 1) {
            this.prevDeltaXage = 0;
            this.prevDeltaYage = 0;
        }
        if (args.state === 2) {
            this.dragAgeItem.translateX += args.deltaX - this.prevDeltaXage;
            // console.log(this.prevDeltaX);
            this.dragAgeItem.translateY = 0;
            this.prevDeltaXage = args.deltaX;
            this.prevDeltaYage = args.deltaY;
        }
        else if (args.state === 3) {
            this.positionAgeX += args.deltaX;
            console.log(this.positionAgeX);
            alert('onPanAge finished: recalculate, position: ' + this.positionAgeX);
            // console.log(this.prevDeltaXage);
            // console.log(this.dragAgeItem.translateX);
        }
    };
    GraphComponent.prototype.onTap = function ($event) {
        alert('onTap: show zoom dialog');
    };
    GraphComponent.prototype.onTapAow = function ($event) {
        alert('onTapAow: show current aow age');
    };
    GraphComponent.prototype.onTapAge = function ($event) {
        alert('onTapAge: show current pension age');
    };
    GraphComponent.prototype.onTapTarget = function ($event) {
        alert('onTapTarget: show current target income');
    };
    return GraphComponent;
}());
__decorate([
    core_1.ViewChild("aowAge"),
    __metadata("design:type", core_1.ElementRef)
], GraphComponent.prototype, "aowAge", void 0);
__decorate([
    core_1.ViewChild("dragAge"),
    __metadata("design:type", core_1.ElementRef)
], GraphComponent.prototype, "dragAge", void 0);
__decorate([
    core_1.ViewChild("dragTarget"),
    __metadata("design:type", core_1.ElementRef)
], GraphComponent.prototype, "dragTarget", void 0);
__decorate([
    core_1.ViewChild("dragGraph"),
    __metadata("design:type", core_1.ElementRef)
], GraphComponent.prototype, "draghGraph", void 0);
GraphComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "graph",
        templateUrl: "graph.component.html"
    })
], GraphComponent);
exports.GraphComponent = GraphComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JhcGguY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZ3JhcGguY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBSUEsc0NBQXdGO0FBV3hGLElBQWEsY0FBYztJQUEzQjtJQWlJQSxDQUFDO0lBMUdHLGlDQUFRLEdBQVI7UUFDSSw2REFBNkQ7UUFDN0QsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQztRQUM1QyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDO1FBQzlDLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUM7UUFDcEQsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQztRQUNuRCxJQUFJLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBQ3ZELElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUM7UUFDMUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQztJQUNuRCxDQUFDO0lBRUQsbUNBQVUsR0FBVixVQUFXLElBQXlCO1FBQ2hDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNuQixJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQztZQUN2QixJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQztZQUN2QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDO1lBQzFCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLENBQUM7WUFDMUIsSUFBSSxDQUFDLGVBQWUsR0FBRyxDQUFDLENBQUM7WUFDekIsSUFBSSxDQUFDLGVBQWUsR0FBRyxDQUFDLENBQUM7UUFD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QUFDOzhCQUFVLGlCQUFVOytDQUFDO0FBQ2pCO0lBQXhCLGdCQUFTLENBQUMsWUFBWSxDQUFDOzhCQUFhLGlCQUFVO2tEQUFDO0FBQ3hCO0lBQXZCLGdCQUFTLENBQUMsV0FBVyxDQUFDOzhCQUFhLGlCQUFVO2tEQUFDO0FBTHRDLGNBQWM7SUFMMUIsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixRQUFRLEVBQUUsT0FBTztRQUNqQixXQUFXLEVBQUUsc0JBQXNCO0tBQ3RDLENBQUM7R0FDVyxjQUFjLENBaUkxQjtBQWpJWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHBsYXRmb3JtTW9kdWxlIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3BsYXRmb3JtXCI7XG5cbmltcG9ydCB7IFNjcm9sbEV2ZW50RGF0YSB9IGZyb20gXCJ1aS9zY3JvbGwtdmlld1wiO1xuaW1wb3J0IHsgUGFuR2VzdHVyZUV2ZW50RGF0YSB9IGZyb20gXCJ1aS9nZXN0dXJlc1wiO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEVsZW1lbnRSZWYsIFZpZXdDaGlsZCwgQWZ0ZXJWaWV3SW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBTd2lzc0FybXlLbmlmZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtc3dpc3MtYXJteS1rbmlmZVwiO1xuXG5pbXBvcnQgeyBHZXN0dXJlVHlwZXMsIFN3aXBlR2VzdHVyZUV2ZW50RGF0YSB9IGZyb20gXCJ1aS9nZXN0dXJlc1wiO1xuaW1wb3J0IHsgQW5pbWF0aW9uQ3VydmUgfSBmcm9tIFwidWkvZW51bXNcIjtcblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogXCJncmFwaFwiLFxuICAgIHRlbXBsYXRlVXJsOiBcImdyYXBoLmNvbXBvbmVudC5odG1sXCJcbn0pXG5leHBvcnQgY2xhc3MgR3JhcGhDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgQFZpZXdDaGlsZChcImFvd0FnZVwiKSBhb3dBZ2U6IEVsZW1lbnRSZWY7XG4gICAgQFZpZXdDaGlsZChcImRyYWdBZ2VcIikgZHJhZ0FnZTogRWxlbWVudFJlZjtcbiAgICBAVmlld0NoaWxkKFwiZHJhZ1RhcmdldFwiKSBkcmFnVGFyZ2V0OiBFbGVtZW50UmVmO1xuICAgIEBWaWV3Q2hpbGQoXCJkcmFnR3JhcGhcIikgZHJhZ2hHcmFwaDogRWxlbWVudFJlZjtcblxuICAgIGFvd0FnZUl0ZW07XG4gICAgZHJhZ0FnZUl0ZW07XG4gICAgZHJhZ1RhcmdldEl0ZW07XG4gICAgZHJhZ0dyYXBoSXRlbTtcblxuICAgIHByZXZEZWx0YVhhb3c6IG51bWJlcjtcbiAgICBwcmV2RGVsdGFYYWdlOiBudW1iZXI7XG4gICAgcHJldkRlbHRhWWFnZTogbnVtYmVyO1xuICAgIHByZXZEZWx0YVh0YXJnZXQ6IG51bWJlcjtcbiAgICBwcmV2RGVsdGFZdGFyZ2V0OiBudW1iZXI7XG4gICAgcHJldkRlbHRhWGdyYXBoOiBudW1iZXI7XG4gICAgcHJldkRlbHRhWWdyYXBoOiBudW1iZXI7XG5cbiAgICBwb3NpdGlvbkFnZVg6IG51bWJlcjtcbiAgICBwb3NpdGlvblRhcmdldFk6IG51bWJlcjtcblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhwbGF0Zm9ybU1vZHVsZS5zY3JlZW4ubWFpblNjcmVlbi53aWR0aFBpeGVscyk7XG4gICAgICAgIHRoaXMuYW93QWdlSXRlbSA9IHRoaXMuYW93QWdlLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgIHRoaXMuZHJhZ0FnZUl0ZW0gPSB0aGlzLmRyYWdBZ2UubmF0aXZlRWxlbWVudDtcbiAgICAgICAgdGhpcy5kcmFnVGFyZ2V0SXRlbSA9IHRoaXMuZHJhZ1RhcmdldC5uYXRpdmVFbGVtZW50O1xuICAgICAgICB0aGlzLmRyYWdHcmFwaEl0ZW0gPSB0aGlzLmRyYWdoR3JhcGgubmF0aXZlRWxlbWVudDtcbiAgICAgICAgdGhpcy5kcmFnR3JhcGhJdGVtLnNldElubGluZVN0eWxlKCdtYXJnaW4tbGVmdDogLTIwMCcpO1xuICAgICAgICB0aGlzLnBvc2l0aW9uQWdlWCA9IHRoaXMuZHJhZ0FnZUl0ZW0ubGVmdDtcbiAgICAgICAgdGhpcy5wb3NpdGlvblRhcmdldFkgPSB0aGlzLmRyYWdUYXJnZXRJdGVtLnRvcDtcbiAgICB9XG5cbiAgICBvblBhbkdyYXBoKGFyZ3M6IFBhbkdlc3R1cmVFdmVudERhdGEpIHtcbiAgICAgICAgaWYgKGFyZ3Muc3RhdGUgPT09IDEpIHsgLy8gZG93blxuICAgICAgICAgICAgdGhpcy5wcmV2RGVsdGFYYW93ID0gMDtcbiAgICAgICAgICAgIHRoaXMucHJldkRlbHRhWGFnZSA9IDA7XG4gICAgICAgICAgICB0aGlzLnByZXZEZWx0YVh0YXJnZXQgPSAwO1xuICAgICAgICAgICAgdGhpcy5wcmV2RGVsdGFZdGFyZ2V0ID0gMDtcbiAgICAgICAgICAgIHRoaXMucHJldkRlbHRhWGdyYXBoID0gMDtcbiAgICAgICAgICAgIHRoaXMucHJldkRlbHRhWWdyYXBoID0gMDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChhcmdzLnN0YXRlID09PSAyKSAvLyBwYW5uaW5nXG4gICAgICAgIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGFyZ3MuZGVsdGFYKTtcbiAgICAgICAgICAgIHRoaXMuZHJhZ0dyYXBoSXRlbS50cmFuc2xhdGVYICs9IGFyZ3MuZGVsdGFYIC0gdGhpcy5wcmV2RGVsdGFYZ3JhcGg7XG4gICAgICAgICAgICB0aGlzLmRyYWdHcmFwaEl0ZW0udHJhbnNsYXRlWSA9IDA7XG5cblxuICAgICAgICAgICAgdGhpcy5hb3dBZ2VJdGVtLnRyYW5zbGF0ZVggKz0gYXJncy5kZWx0YVggLSB0aGlzLnByZXZEZWx0YVhhb3c7XG4gICAgICAgICAgICB0aGlzLmRyYWdBZ2VJdGVtLnRyYW5zbGF0ZVggKz0gYXJncy5kZWx0YVggLSB0aGlzLnByZXZEZWx0YVhhZ2U7XG4gICAgICAgICAgICB0aGlzLmRyYWdUYXJnZXRJdGVtLnRyYW5zbGF0ZVggKz0gYXJncy5kZWx0YVggLSB0aGlzLnByZXZEZWx0YVh0YXJnZXQ7XG5cblxuICAgICAgICAgICAgdGhpcy5wcmV2RGVsdGFYYW93ID0gYXJncy5kZWx0YVg7XG4gICAgICAgICAgICB0aGlzLnByZXZEZWx0YVhhZ2UgPSBhcmdzLmRlbHRhWDtcbiAgICAgICAgICAgIHRoaXMucHJldkRlbHRhWGdyYXBoID0gYXJncy5kZWx0YVg7XG4gICAgICAgICAgICB0aGlzLnByZXZEZWx0YVlncmFwaCA9IGFyZ3MuZGVsdGFZO1xuICAgICAgICAgICAgdGhpcy5wcmV2RGVsdGFYdGFyZ2V0ID0gYXJncy5kZWx0YVg7XG4gICAgICAgICAgICB0aGlzLnByZXZEZWx0YVl0YXJnZXQgPSBhcmdzLmRlbHRhWTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChhcmdzLnN0YXRlID09PSAzKSAvLyB1cFxuICAgICAgICB7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvblBhblRhcmdldChhcmdzOiBQYW5HZXN0dXJlRXZlbnREYXRhKSB7XG4gICAgICAgIGlmIChhcmdzLnN0YXRlID09PSAxKSB7IC8vZG93blxuICAgICAgICAgICAgdGhpcy5wcmV2RGVsdGFYdGFyZ2V0ID0gMDtcbiAgICAgICAgICAgIHRoaXMucHJldkRlbHRhWXRhcmdldCA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGFyZ3Muc3RhdGUgPT09IDIpIHsgLy8gcGFubmluZ1xuICAgICAgICAgICAgLy8gYXJncy5kZWx0YVggPSAwO1xuICAgICAgICAgICAgdGhpcy5kcmFnVGFyZ2V0SXRlbS50cmFuc2xhdGVYID0gMDtcbiAgICAgICAgICAgIHRoaXMuZHJhZ1RhcmdldEl0ZW0udHJhbnNsYXRlWSArPSBhcmdzLmRlbHRhWSAtIHRoaXMucHJldkRlbHRhWXRhcmdldDtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGFyZ3MuZGVsdGFYKTtcblxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5kcmFnSXRlbVRhcmdldExlZnQpO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5kcmFnVGFyZ2V0SXRlbS5sZWZ0KTtcbiAgICAgICAgICAgIHRoaXMucHJldkRlbHRhWHRhcmdldCA9IDA7XG4gICAgICAgICAgICB0aGlzLnByZXZEZWx0YVl0YXJnZXQgPSBhcmdzLmRlbHRhWTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChhcmdzLnN0YXRlID09PSAzKSB7IC8vIHVwXG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uVGFyZ2V0WSArPSBhcmdzLmRlbHRhWTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMucG9zaXRpb25UYXJnZXRZKTtcbiAgICAgICAgICAgIGFsZXJ0KCdvblBhblRhcmdldCBmaW5pc2hlZDogcmVjYWxjdWxhdGUsIHBvc2l0aW9uOiAnICsgdGhpcy5wb3NpdGlvblRhcmdldFkpO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBvblBhbkFnZShhcmdzOiBQYW5HZXN0dXJlRXZlbnREYXRhKSB7XG4gICAgICAgIGlmIChhcmdzLnN0YXRlID09PSAxKSB7IC8vZG93blxuICAgICAgICAgICAgdGhpcy5wcmV2RGVsdGFYYWdlID0gMDtcbiAgICAgICAgICAgIHRoaXMucHJldkRlbHRhWWFnZSA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGFyZ3Muc3RhdGUgPT09IDIpIHsgLy8gcGFubmluZ1xuICAgICAgICAgICAgdGhpcy5kcmFnQWdlSXRlbS50cmFuc2xhdGVYICs9IGFyZ3MuZGVsdGFYIC0gdGhpcy5wcmV2RGVsdGFYYWdlO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5wcmV2RGVsdGFYKTtcbiAgICAgICAgICAgIHRoaXMuZHJhZ0FnZUl0ZW0udHJhbnNsYXRlWSA9IDA7XG4gICAgICAgICAgICB0aGlzLnByZXZEZWx0YVhhZ2UgPSBhcmdzLmRlbHRhWDtcbiAgICAgICAgICAgIHRoaXMucHJldkRlbHRhWWFnZSA9IGFyZ3MuZGVsdGFZO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGFyZ3Muc3RhdGUgPT09IDMpIHsgLy8gdXBcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb25BZ2VYICs9IGFyZ3MuZGVsdGFYO1xuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5wb3NpdGlvbkFnZVgpO1xuICAgICAgICAgICAgYWxlcnQoJ29uUGFuQWdlIGZpbmlzaGVkOiByZWNhbGN1bGF0ZSwgcG9zaXRpb246ICcgKyB0aGlzLnBvc2l0aW9uQWdlWCk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnByZXZEZWx0YVhhZ2UpO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5kcmFnQWdlSXRlbS50cmFuc2xhdGVYKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgb25UYXAoJGV2ZW50KSB7XG4gICAgICAgIGFsZXJ0KCdvblRhcDogc2hvdyB6b29tIGRpYWxvZycpO1xuICAgIH1cblxuICAgIG9uVGFwQW93KCRldmVudCkge1xuICAgICAgICBhbGVydCgnb25UYXBBb3c6IHNob3cgY3VycmVudCBhb3cgYWdlJyk7XG4gICAgfVxuXG4gICAgb25UYXBBZ2UoJGV2ZW50KSB7XG4gICAgICAgIGFsZXJ0KCdvblRhcEFnZTogc2hvdyBjdXJyZW50IHBlbnNpb24gYWdlJyk7XG4gICAgfVxuXG4gICAgb25UYXBUYXJnZXQoJGV2ZW50KSB7XG4gICAgICAgIGFsZXJ0KCdvblRhcFRhcmdldDogc2hvdyBjdXJyZW50IHRhcmdldCBpbmNvbWUnKTtcbiAgICB9XG5cbn1cbiJdfQ==
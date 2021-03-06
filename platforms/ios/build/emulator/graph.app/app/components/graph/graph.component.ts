import * as platformModule from "tns-core-modules/platform";

import { ScrollEventData } from "ui/scroll-view";
import { PanGestureEventData } from "ui/gestures";
import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from "@angular/core";
import { SwissArmyKnife } from "nativescript-swiss-army-knife";

import { GestureTypes, SwipeGestureEventData } from "ui/gestures";
import { AnimationCurve } from "ui/enums";

@Component({
    moduleId: module.id,
    selector: "graph",
    templateUrl: "graph.component.html"
})
export class GraphComponent implements OnInit {

    @ViewChild("aowAge") aowAge: ElementRef;
    @ViewChild("dragAge") dragAge: ElementRef;
    @ViewChild("dragTarget") dragTarget: ElementRef;
    @ViewChild("dragGraph") draghGraph: ElementRef;

    aowAgeItem;
    dragAgeItem;
    dragTargetItem;
    dragGraphItem;

    prevDeltaXaow: number;
    prevDeltaXage: number;
    prevDeltaYage: number;
    prevDeltaXtarget: number;
    prevDeltaYtarget: number;
    prevDeltaXgraph: number;
    prevDeltaYgraph: number;

    positionAgeX: number;
    positionTargetY: number;

    ngOnInit() {
        // console.log(platformModule.screen.mainScreen.widthPixels);
        this.aowAgeItem = this.aowAge.nativeElement;
        this.dragAgeItem = this.dragAge.nativeElement;
        this.dragTargetItem = this.dragTarget.nativeElement;
        this.dragGraphItem = this.draghGraph.nativeElement;
        this.dragGraphItem.setInlineStyle('margin-left: -200');
        this.positionAgeX = this.dragAgeItem.left;
        this.positionTargetY = this.dragTargetItem.top;
    }

    onPanGraph(args: PanGestureEventData) {
        if (args.state === 1) { // down
            this.prevDeltaXaow = 0;
            this.prevDeltaXage = 0;
            this.prevDeltaXtarget = 0;
            this.prevDeltaYtarget = 0;
            this.prevDeltaXgraph = 0;
            this.prevDeltaYgraph = 0;
        }
        else if (args.state === 2) // panning
        {
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
        else if (args.state === 3) // up
        {
        }
    }

    onPanTarget(args: PanGestureEventData) {
        if (args.state === 1) { //down
            this.prevDeltaXtarget = 0;
            this.prevDeltaYtarget = 0;
        }
        if (args.state === 2) { // panning
            // args.deltaX = 0;
            this.dragTargetItem.translateX = 0;
            this.dragTargetItem.translateY += args.deltaY - this.prevDeltaYtarget;
            // console.log(args.deltaX);

            // console.log(this.dragItemTargetLeft);
            // console.log(this.dragTargetItem.left);
            this.prevDeltaXtarget = 0;
            this.prevDeltaYtarget = args.deltaY;
        }
        else if (args.state === 3) { // up
            this.positionTargetY += args.deltaY;
            console.log(this.positionTargetY);
            alert('onPanTarget finished: recalculate, position: ' + this.positionTargetY);
        }
    }


    onPanAge(args: PanGestureEventData) {
        if (args.state === 1) { //down
            this.prevDeltaXage = 0;
            this.prevDeltaYage = 0;
        }
        if (args.state === 2) { // panning
            this.dragAgeItem.translateX += args.deltaX - this.prevDeltaXage;
            // console.log(this.prevDeltaX);
            this.dragAgeItem.translateY = 0;
            this.prevDeltaXage = args.deltaX;
            this.prevDeltaYage = args.deltaY;
        }
        else if (args.state === 3) { // up
            this.positionAgeX += args.deltaX;
            console.log(this.positionAgeX);
            alert('onPanAge finished: recalculate, position: ' + this.positionAgeX);
            // console.log(this.prevDeltaXage);
            // console.log(this.dragAgeItem.translateX);
        }
    }


    onTap($event) {
        alert('onTap: show zoom dialog');
    }

    onTapAow($event) {
        alert('onTapAow: show current aow age');
    }

    onTapAge($event) {
        alert('onTapAge: show current pension age');
    }

    onTapTarget($event) {
        alert('onTapTarget: show current target income');
    }

}

/// <reference path='fourslash.ts' />

// @Filename: regex.ts
////var regex = /*0*///*1*/asdf/*2*/ /*3*///*4*/;

for (const marker of test.markers()) {
    verify.noDocCommentTemplateAt(marker);
}

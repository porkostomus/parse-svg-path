goog.provide('parse_svg_path.main');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('clojure.string');
/**
 * Splits an SVG path string into a sequence of commands
 */
parse_svg_path.main.parse_commands = (function parse_svg_path$main$parse_commands(s){
return clojure.string.split.cljs$core$IFn$_invoke$arity$2(s,/(?=[A-Z])/);
});
/**
 * Parses the command's arguments into a sequence of integers
 */
parse_svg_path.main.parse_vals = (function parse_svg_path$main$parse_vals(s){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(parseInt,cljs.core.re_seq(/[\d.]+/,cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(1))));
});
/**
 * Takes an SVG path string and outputs a seq of vectors
 * containing each command paired with its args
 */
parse_svg_path.main.parse_svg_path = (function parse_svg_path$main$parse_svg_path(s){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.first,parse_svg_path.main.parse_vals),parse_svg_path.main.parse_commands(s));
});
parse_svg_path.main.app = (function parse_svg_path$main$app(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"margin","margin",-995903681),"auto",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"100px",new cljs.core.Keyword(null,"width","width",-384071477),"600px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"parse-svg-path"], null)], null);
});
parse_svg_path.main.start = (function parse_svg_path$main$start(){
return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [parse_svg_path.main.app], null),document.getElementById("app"));
});
parse_svg_path.main.init = (function parse_svg_path$main$init(){
return parse_svg_path.main.start();
});
goog.exportSymbol('parse_svg_path.main.init', parse_svg_path.main.init);

//# sourceMappingURL=parse_svg_path.main.js.map
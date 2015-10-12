/* parser generated by jison 0.4.15 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var parser = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[5,62],$V1=[5,60,62],$V2=[5,53,60,62],$V3=[5,50,53,60,62],$V4=[5,48,50,53,60,62],$V5=[5,43,45,46,48,50,53,60,62],$V6=[1,37],$V7=[1,38],$V8=[1,34],$V9=[1,36],$Va=[1,27],$Vb=[1,28],$Vc=[1,32],$Vd=[1,30],$Ve=[5,41,43,45,46,48,50,53,60,62],$Vf=[5,32,41,43,45,46,48,50,53,60,62],$Vg=[1,51],$Vh=[1,52],$Vi=[1,53],$Vj=[1,54],$Vk=[1,55],$Vl=[1,56],$Vm=[1,57],$Vn=[1,58],$Vo=[1,59],$Vp=[1,60],$Vq=[1,61],$Vr=[5,17,18,19,20,21,22,23,24,25,26,27,30,32,34,41,43,45,46,48,50,53,55,56,57,60,62],$Vs=[1,65],$Vt=[5,9,17,18,19,20,21,22,23,24,25,26,27,28,30,32,34,41,43,44,45,46,48,50,53,55,56,57,60,62],$Vu=[5,43,44,45,46,48,50,53,60,62],$Vv=[5,17,18,19,20,21,22,23,24,25,26,30,32,34,41,43,45,46,48,50,53,55,56,57,60,62],$Vw=[5,20,21,23,24,25,26,30,32,34,41,43,45,46,48,50,53,55,56,57,60,62],$Vx=[5,32,62],$Vy=[1,104],$Vz=[5,30,32,53,60,62],$VA=[5,17,18,19,20,21,23,24,25,26,30,32,34,41,43,45,46,48,50,53,55,56,57,60,62],$VB=[5,23,24,30,32,34,41,43,45,46,48,50,53,55,56,57,60,62],$VC=[5,23,24,25,26,30,32,34,41,43,45,46,48,50,53,55,56,57,60,62];
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"expressions":3,"select":4,"EOF":5,"ident":6,"IDENT":7,"complexIdent":8,".":9,"number":10,"NUMBER":11,"const":12,"STRING":13,"NULL":14,"expression":15,"DISTINCT":16,"*":17,"%":18,"/":19,"+":20,"-":21,"=":22,"AND":23,"OR":24,">":25,"<":26,"IN":27,"(":28,"expressionsList":29,")":30,"COUNT":31,",":32,"column":33,"AS":34,"columns":35,"selectClause":36,"SELECT":37,"selectColumns":38,"table":39,"selectFrom":40,"FROM":41,"selectJoin":42,"JOIN":43,"ON":44,"INNER":45,"LEFT":46,"selectWhere":47,"WHERE":48,"selectGroup":49,"GROUP":50,"BY":51,"selectHaving":52,"HAVING":53,"order":54,"ASC":55,"DESC":56,"NUMERIC":57,"ordersList":58,"selectOrder":59,"ORDER":60,"selectLimit":61,"LIMIT":62,"OFFSET":63,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",7:"IDENT",9:".",11:"NUMBER",13:"STRING",14:"NULL",16:"DISTINCT",17:"*",18:"%",19:"/",20:"+",21:"-",22:"=",23:"AND",24:"OR",25:">",26:"<",27:"IN",28:"(",30:")",31:"COUNT",32:",",34:"AS",37:"SELECT",41:"FROM",43:"JOIN",44:"ON",45:"INNER",46:"LEFT",48:"WHERE",50:"GROUP",51:"BY",53:"HAVING",55:"ASC",56:"DESC",57:"NUMERIC",60:"ORDER",62:"LIMIT",63:"OFFSET"},
productions_: [0,[3,2],[6,1],[8,3],[8,1],[10,1],[12,1],[12,1],[12,1],[15,2],[15,3],[15,3],[15,3],[15,3],[15,3],[15,3],[15,3],[15,3],[15,3],[15,3],[15,2],[15,5],[15,4],[15,3],[15,4],[15,4],[15,1],[15,1],[15,3],[29,3],[29,1],[33,3],[33,1],[35,3],[35,1],[36,1],[38,2],[38,2],[39,3],[39,1],[40,3],[40,1],[42,5],[42,6],[42,6],[42,1],[47,3],[47,1],[49,4],[49,1],[52,3],[52,1],[54,2],[54,2],[54,1],[54,3],[54,3],[54,2],[58,3],[58,1],[59,4],[59,1],[61,5],[61,5],[61,3],[61,1],[4,1]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:
 return $$[$0-1]; 
break;
case 2:
 this.$ = new nodes.Ident($$[$0]); 
break;
case 3:
 $$[$0-2].fragments.push($$[$0].name); this.$ = $$[$0-2]; 
break;
case 4:
 this.$ = new nodes.ComplexIdent($$[$0].name); 
break;
case 5:
 this.$ = new nodes.Number($$[$0]); 
break;
case 6:
 this.$ = new nodes.String($$[$0]); 
break;
case 7: case 27: case 45: case 47: case 49: case 51: case 61: case 66:
 this.$ = $$[$0]; 
break;
case 8:
 this.$ = new nodes.Null(); 
break;
case 9:
 this.$ = new nodes.Distinct($$[$0]); 
break;
case 10: case 11: case 12: case 13: case 14: case 15: case 16: case 17: case 18: case 19:
 this.$ = new nodes.BinaryOperation($$[$0-1], $$[$0-2], $$[$0]); 
break;
case 20:
 this.$ = new nodes.UnaryOperation($$[$0-1], $$[$0]); 
break;
case 21:
 this.$ = new nodes.In($$[$0-4], $$[$0-1]); 
break;
case 22:
 this.$ = new nodes.Call(new nodes.FunctionIdent($$[$0-3]), $$[$0-1]); 
break;
case 23:
 this.$ = new nodes.Call(new nodes.FunctionIdent($$[$0-2]), []); 
break;
case 24:
 this.$ = new nodes.Call(new nodes.FunctionIdent(new nodes.ComplexIdent($$[$0-3])), [$$[$0-1]]); 
break;
case 25:
 this.$ = new nodes.Call(new nodes.FunctionIdent(new nodes.ComplexIdent($$[$0-3])), []); 
break;
case 26:
 this.$ = new nodes.ColumnIdent($$[$0]); 
break;
case 28:
 this.$ = new nodes.Brackets($$[$0-1]); 
break;
case 29: case 58:
 $$[$0-2].push($$[$0]); this.$ = $$[$0-2]; 
break;
case 30: case 34: case 59:
 this.$ = [$$[$0]]; 
break;
case 31:
 this.$ = new nodes.Column($$[$0-2], new nodes.ColumnAlias($$[$0])); 
break;
case 32:
 this.$ = new nodes.Column($$[$0]); 
break;
case 33:
 this.$ = $$[$0-2].concat($$[$0]); 
break;
case 35:
 this.$ = new nodes.Select(); 
break;
case 36:
 $$[$0-1].columns = $$[$0]; this.$ = $$[$0-1]; 
break;
case 37:
 $$[$0-1].columns = null; this.$ = $$[$0-1]; 
break;
case 38:
 this.$ = new nodes.Table(new nodes.TableIdent($$[$0-2]), new nodes.TableAlias($$[$0])); 
break;
case 39:
 this.$ = new nodes.Table(new nodes.TableIdent($$[$0])); 
break;
case 40:
 $$[$0-2].table = $$[$0]; this.$ = $$[$0-2]; 
break;
case 41:
 $$[$0].table = null; this.$ = $$[$0]; 
break;
case 42:
 $$[$0-4].join(new nodes.InnerJoin($$[$0-2], $$[$0])); this.$ = $$[$0-4]; 
break;
case 43:
 $$[$0-5].join(new nodes.InnerJoin($$[$0-2], $$[$0])); this.$ = $$[$0-5]; 
break;
case 44:
 $$[$0-5].join(new nodes.LeftJoin($$[$0-2], $$[$0])); this.$ = $$[$0-5]; 
break;
case 46:
 $$[$0-2].where = $$[$0]; this.$ = $$[$0-2]; 
break;
case 48:
 $$[$0-3].groups = $$[$0]; this.$ = $$[$0-3]; 
break;
case 50:
 $$[$0-2].having = $$[$0]; this.$ = $$[$0-2]; 
break;
case 52: case 53:
 this.$ = new nodes.Order($$[$0-1], $$[$0]) 
break;
case 54:
 this.$ = new nodes.Order($$[$0]) 
break;
case 55: case 56:
 this.$ = new nodes.Order($$[$0-2], $$[$0], $$[$0-1]) 
break;
case 57:
 this.$ = new nodes.Order($$[$0-1], 'ASC', $$[$0]) 
break;
case 60:
 $$[$0-3].orders = $$[$0]; this.$ = $$[$0-3]; 
break;
case 62:
 $$[$0-4].setLimit($$[$0].value, $$[$0-2].value); this.$ = $$[$0-4]; 
break;
case 63:
 $$[$0-4].setLimit($$[$0-2].value, $$[$0].value); this.$ = $$[$0-4]; 
break;
case 64:
 $$[$0-2].setLimit($$[$0].value); this.$ = $$[$0-2]; 
break;
case 65:
 this.$ = $$[$0] 
break;
}
},
table: [{3:1,4:2,36:11,37:[1,12],38:10,40:9,42:8,47:7,49:6,52:5,59:4,61:3},{1:[3]},{5:[1,13]},{5:[2,66]},{5:[2,65],62:[1,14]},o($V0,[2,61],{60:[1,15]}),o($V1,[2,51],{53:[1,16]}),o($V2,[2,49],{50:[1,17]}),o($V3,[2,47],{48:[1,18]}),o($V4,[2,45],{43:[1,19],45:[1,20],46:[1,21]}),o($V5,[2,41],{41:[1,22]}),{6:33,7:$V6,8:29,10:35,11:$V7,12:31,13:$V8,14:$V9,15:26,16:$Va,17:[1,24],21:$Vb,28:$Vc,31:$Vd,33:25,35:23},o([7,11,13,14,16,17,21,28,31],[2,35]),{1:[2,1]},{10:39,11:$V7},{51:[1,40]},{6:33,7:$V6,8:29,10:35,11:$V7,12:31,13:$V8,14:$V9,15:41,16:$Va,21:$Vb,28:$Vc,31:$Vd},{51:[1,42]},{6:33,7:$V6,8:29,10:35,11:$V7,12:31,13:$V8,14:$V9,15:43,16:$Va,21:$Vb,28:$Vc,31:$Vd},{6:33,7:$V6,8:45,39:44},{43:[1,46]},{43:[1,47]},{6:33,7:$V6,8:45,39:48},o($Ve,[2,36],{32:[1,49]}),o($Ve,[2,37]),o($Vf,[2,34]),o($Vf,[2,32],{17:$Vg,18:$Vh,19:$Vi,20:$Vj,21:$Vk,22:$Vl,23:$Vm,24:$Vn,25:$Vo,26:$Vp,27:$Vq,34:[1,50]}),{6:33,7:$V6,8:29,10:35,11:$V7,12:31,13:$V8,14:$V9,15:62,16:$Va,21:$Vb,28:$Vc,31:$Vd},{6:33,7:$V6,8:29,10:35,11:$V7,12:31,13:$V8,14:$V9,15:63,16:$Va,21:$Vb,28:$Vc,31:$Vd},o($Vr,[2,26],{9:$Vs,28:[1,64]}),{28:[1,66]},o($Vr,[2,27]),{6:33,7:$V6,8:29,10:35,11:$V7,12:31,13:$V8,14:$V9,15:67,16:$Va,21:$Vb,28:$Vc,31:$Vd},o($Vt,[2,4]),o($Vr,[2,6]),o($Vr,[2,7]),o($Vr,[2,8]),o($Vt,[2,2]),o([5,17,18,19,20,21,22,23,24,25,26,27,30,32,34,41,43,45,46,48,50,53,55,56,57,60,62,63],[2,5]),{5:[2,64],32:[1,68],63:[1,69]},{6:33,7:$V6,8:29,10:35,11:$V7,12:31,13:$V8,14:$V9,15:72,16:$Va,21:$Vb,28:$Vc,31:$Vd,54:71,58:70},o($V1,[2,50],{17:$Vg,18:$Vh,19:$Vi,20:$Vj,21:$Vk,22:$Vl,23:$Vm,24:$Vn,25:$Vo,26:$Vp,27:$Vq}),{6:33,7:$V6,8:29,10:35,11:$V7,12:31,13:$V8,14:$V9,15:74,16:$Va,21:$Vb,28:$Vc,29:73,31:$Vd},o($V3,[2,46],{17:$Vg,18:$Vh,19:$Vi,20:$Vj,21:$Vk,22:$Vl,23:$Vm,24:$Vn,25:$Vo,26:$Vp,27:$Vq}),{44:[1,75]},o($Vu,[2,39],{9:$Vs,34:[1,76]}),{6:33,7:$V6,8:45,39:77},{6:33,7:$V6,8:45,39:78},o($V5,[2,40]),{6:33,7:$V6,8:29,10:35,11:$V7,12:31,13:$V8,14:$V9,15:26,16:$Va,21:$Vb,28:$Vc,31:$Vd,33:25,35:79},{6:80,7:$V6},{6:33,7:$V6,8:29,10:35,11:$V7,12:31,13:$V8,14:$V9,15:81,16:$Va,21:$Vb,28:$Vc,31:$Vd},{6:33,7:$V6,8:29,10:35,11:$V7,12:31,13:$V8,14:$V9,15:82,16:$Va,21:$Vb,28:$Vc,31:$Vd},{6:33,7:$V6,8:29,10:35,11:$V7,12:31,13:$V8,14:$V9,15:83,16:$Va,21:$Vb,28:$Vc,31:$Vd},{6:33,7:$V6,8:29,10:35,11:$V7,12:31,13:$V8,14:$V9,15:84,16:$Va,21:$Vb,28:$Vc,31:$Vd},{6:33,7:$V6,8:29,10:35,11:$V7,12:31,13:$V8,14:$V9,15:85,16:$Va,21:$Vb,28:$Vc,31:$Vd},{6:33,7:$V6,8:29,10:35,11:$V7,12:31,13:$V8,14:$V9,15:86,16:$Va,21:$Vb,28:$Vc,31:$Vd},{6:33,7:$V6,8:29,10:35,11:$V7,12:31,13:$V8,14:$V9,15:87,16:$Va,21:$Vb,28:$Vc,31:$Vd},{6:33,7:$V6,8:29,10:35,11:$V7,12:31,13:$V8,14:$V9,15:88,16:$Va,21:$Vb,28:$Vc,31:$Vd},{6:33,7:$V6,8:29,10:35,11:$V7,12:31,13:$V8,14:$V9,15:89,16:$Va,21:$Vb,28:$Vc,31:$Vd},{6:33,7:$V6,8:29,10:35,11:$V7,12:31,13:$V8,14:$V9,15:90,16:$Va,21:$Vb,28:$Vc,31:$Vd},{28:[1,91]},o($Vv,[2,9],{27:$Vq}),o($Vw,[2,20],{17:$Vg,18:$Vh,19:$Vi,22:$Vl,27:$Vq}),{6:33,7:$V6,8:29,10:35,11:$V7,12:31,13:$V8,14:$V9,15:74,16:$Va,21:$Vb,28:$Vc,29:92,30:[1,93],31:$Vd},{6:94,7:$V6},{6:33,7:$V6,8:29,10:35,11:$V7,12:31,13:$V8,14:$V9,15:95,16:$Va,17:[1,96],21:$Vb,28:$Vc,31:$Vd},{17:$Vg,18:$Vh,19:$Vi,20:$Vj,21:$Vk,22:$Vl,23:$Vm,24:$Vn,25:$Vo,26:$Vp,27:$Vq,30:[1,97]},{10:98,11:$V7},{10:99,11:$V7},o($V0,[2,60],{32:[1,100]}),o($Vx,[2,59]),o($Vx,[2,54],{17:$Vg,18:$Vh,19:$Vi,20:$Vj,21:$Vk,22:$Vl,23:$Vm,24:$Vn,25:$Vo,26:$Vp,27:$Vq,55:[1,101],56:[1,102],57:[1,103]}),o($V2,[2,48],{32:$Vy}),o($Vz,[2,30],{17:$Vg,18:$Vh,19:$Vi,20:$Vj,21:$Vk,22:$Vl,23:$Vm,24:$Vn,25:$Vo,26:$Vp,27:$Vq}),{6:33,7:$V6,8:29,10:35,11:$V7,12:31,13:$V8,14:$V9,15:105,16:$Va,21:$Vb,28:$Vc,31:$Vd},{6:106,7:$V6},{44:[1,107]},{44:[1,108]},o($Vf,[2,33]),o($Vf,[2,31]),o($VA,[2,10],{22:$Vl,27:$Vq}),o($VA,[2,11],{22:$Vl,27:$Vq}),o($VA,[2,12],{22:$Vl,27:$Vq}),o($Vw,[2,13],{17:$Vg,18:$Vh,19:$Vi,22:$Vl,27:$Vq}),o($Vw,[2,14],{17:$Vg,18:$Vh,19:$Vi,22:$Vl,27:$Vq}),o($Vv,[2,15],{27:$Vq}),o($VB,[2,16],{17:$Vg,18:$Vh,19:$Vi,20:$Vj,21:$Vk,22:$Vl,25:$Vo,26:$Vp,27:$Vq}),o($VB,[2,17],{17:$Vg,18:$Vh,19:$Vi,20:$Vj,21:$Vk,22:$Vl,25:$Vo,26:$Vp,27:$Vq}),o($VC,[2,18],{17:$Vg,18:$Vh,19:$Vi,20:$Vj,21:$Vk,22:$Vl,27:$Vq}),o($VC,[2,19],{17:$Vg,18:$Vh,19:$Vi,20:$Vj,21:$Vk,22:$Vl,27:$Vq}),{6:33,7:$V6,8:29,10:35,11:$V7,12:31,13:$V8,14:$V9,15:74,16:$Va,21:$Vb,28:$Vc,29:109,31:$Vd},{30:[1,110],32:$Vy},o($Vr,[2,23]),o($Vt,[2,3]),{17:$Vg,18:$Vh,19:$Vi,20:$Vj,21:$Vk,22:$Vl,23:$Vm,24:$Vn,25:$Vo,26:$Vp,27:$Vq,30:[1,111]},{30:[1,112]},o($Vr,[2,28]),{5:[2,62]},{5:[2,63]},{6:33,7:$V6,8:29,10:35,11:$V7,12:31,13:$V8,14:$V9,15:72,16:$Va,21:$Vb,28:$Vc,31:$Vd,54:113},o($Vx,[2,52]),o($Vx,[2,53]),o($Vx,[2,57],{55:[1,114],56:[1,115]}),{6:33,7:$V6,8:29,10:35,11:$V7,12:31,13:$V8,14:$V9,15:116,16:$Va,21:$Vb,28:$Vc,31:$Vd},o($V4,[2,42],{17:$Vg,18:$Vh,19:$Vi,20:$Vj,21:$Vk,22:$Vl,23:$Vm,24:$Vn,25:$Vo,26:$Vp,27:$Vq}),o($Vu,[2,38]),{6:33,7:$V6,8:29,10:35,11:$V7,12:31,13:$V8,14:$V9,15:117,16:$Va,21:$Vb,28:$Vc,31:$Vd},{6:33,7:$V6,8:29,10:35,11:$V7,12:31,13:$V8,14:$V9,15:118,16:$Va,21:$Vb,28:$Vc,31:$Vd},{30:[1,119],32:$Vy},o($Vr,[2,22]),o($Vr,[2,24]),o($Vr,[2,25]),o($Vx,[2,58]),o($Vx,[2,55]),o($Vx,[2,56]),o($Vz,[2,29],{17:$Vg,18:$Vh,19:$Vi,20:$Vj,21:$Vk,22:$Vl,23:$Vm,24:$Vn,25:$Vo,26:$Vp,27:$Vq}),o($V4,[2,43],{17:$Vg,18:$Vh,19:$Vi,20:$Vj,21:$Vk,22:$Vl,23:$Vm,24:$Vn,25:$Vo,26:$Vp,27:$Vq}),o($V4,[2,44],{17:$Vg,18:$Vh,19:$Vi,20:$Vj,21:$Vk,22:$Vl,23:$Vm,24:$Vn,25:$Vo,26:$Vp,27:$Vq}),o($Vr,[2,21])],
defaultActions: {3:[2,66],13:[2,1],98:[2,62],99:[2,63]},
parseError: function parseError(str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        throw new Error(str);
    }
},
parse: function parse(input) {
    var self = this, stack = [0], tstack = [], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    var args = lstack.slice.call(arguments, 1);
    var lexer = Object.create(this.lexer);
    var sharedState = { yy: {} };
    for (var k in this.yy) {
        if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
            sharedState.yy[k] = this.yy[k];
        }
    }
    lexer.setInput(input, sharedState.yy);
    sharedState.yy.lexer = lexer;
    sharedState.yy.parser = this;
    if (typeof lexer.yylloc == 'undefined') {
        lexer.yylloc = {};
    }
    var yyloc = lexer.yylloc;
    lstack.push(yyloc);
    var ranges = lexer.options && lexer.options.ranges;
    if (typeof sharedState.yy.parseError === 'function') {
        this.parseError = sharedState.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    _token_stack:
        function lex() {
            var token;
            token = lexer.lex() || EOF;
            if (typeof token !== 'number') {
                token = self.symbols_[token] || token;
            }
            return token;
        }
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
                    if (typeof action === 'undefined' || !action.length || !action[0]) {
                var errStr = '';
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push('\'' + this.terminals_[p] + '\'');
                    }
                }
                if (lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                    text: lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: lexer.yylineno,
                    loc: yyloc,
                    expected: expected
                });
            }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(lexer.yytext);
            lstack.push(lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = lexer.yyleng;
                yytext = lexer.yytext;
                yylineno = lexer.yylineno;
                yyloc = lexer.yylloc;
                if (recovering > 0) {
                    recovering--;
                }
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
                yyval._$.range = [
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                ];
            }
            r = this.performAction.apply(yyval, [
                yytext,
                yyleng,
                yylineno,
                sharedState.yy,
                action[1],
                vstack,
                lstack
            ].concat(args));
            if (typeof r !== 'undefined') {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}};

var nodes = require('./nodes.js');

/* generated by jison-lex 0.3.4 */
var lexer = (function(){
var lexer = ({

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input, yy) {
        this.yy = yy || this.yy || {};
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function (match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex() {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin(condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState() {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules() {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState(n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState(condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {"case-insensitive":true},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {
var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:
break;
case 1: return 32; 
break;
case 2: return 14; 
break;
case 3: return 37; 
break;
case 4: return 41; 
break;
case 5: return 16; 
break;
case 6: return 57; 
break;
case 7: return 48; 
break;
case 8: return 60; 
break;
case 9: return 50; 
break;
case 10: return 51; 
break;
case 11: return 53; 
break;
case 12: return 31; 
break;
case 13: return 62; 
break;
case 14: return 63; 
break;
case 15: return 46; 
break;
case 16: return 45; 
break;
case 17: return 13; 
break;
case 18: return 13; 
break;
case 19: return 11; 
break;
case 20: return 34; 
break;
case 21: return 55; 
break;
case 22: return 56; 
break;
case 23: return 27; 
break;
case 24: return 44; 
break;
case 25: return 43; 
break;
case 26: return 20; 
break;
case 27: return 21; 
break;
case 28: return 19; 
break;
case 29: return 17; 
break;
case 30: return 18; 
break;
case 31: return 22; 
break;
case 32: return 28; 
break;
case 33: return 30; 
break;
case 34: return 26; 
break;
case 35: return 25; 
break;
case 36: return 23; 
break;
case 37: return 24; 
break;
case 38: return 9; 
break;
case 39: return 7; 
break;
case 40: return 7; 
break;
case 41: return 5; 
break;
}
},
rules: [/^(?:\s+)/i,/^(?:,)/i,/^(?:NULL\b)/i,/^(?:SELECT\b)/i,/^(?:FROM\b)/i,/^(?:DISTINCT\b)/i,/^(?:NUMERIC\b)/i,/^(?:WHERE\b)/i,/^(?:ORDER\b)/i,/^(?:GROUP\b)/i,/^(?:BY\b)/i,/^(?:HAVING\b)/i,/^(?:COUNT\b)/i,/^(?:LIMIT\b)/i,/^(?:OFFSET\b)/i,/^(?:LEFT\b)/i,/^(?:INNER\b)/i,/^(?:"(\\.|[^\\"])*")/i,/^(?:'(\\.|[^\\'])*')/i,/^(?:[+-]?[0-9][0-9.]*)/i,/^(?:AS\b)/i,/^(?:ASC\b)/i,/^(?:DESC\b)/i,/^(?:IN\b)/i,/^(?:ON\b)/i,/^(?:JOIN\b)/i,/^(?:\+)/i,/^(?:-)/i,/^(?:\/)/i,/^(?:\*)/i,/^(?:%)/i,/^(?:=)/i,/^(?:\()/i,/^(?:\))/i,/^(?:<)/i,/^(?:>)/i,/^(?:AND\b)/i,/^(?:OR\b)/i,/^(?:\.)/i,/^(?:`(\\.|[^\\`])*`)/i,/^(?:([a-z_][a-z0-9_-]*))/i,/^(?:$)/i],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41],"inclusive":true}}
});
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = parser;
exports.Parser = parser.Parser;
exports.parse = function () { return parser.parse.apply(parser, arguments); };
exports.main = function commonjsMain(args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}

$(function(){
 
    var input = $('#input'),
        body  = $('#body'),
        inputBox  = $('#input-box'),
        timeBox = $('#time'),
        supportedCommand = ['help', 'fcj', 'dhqp'];

    function fcj(args) {
        console.log('fcj command called');
        console.log('args: '+args);
        let text = '<p><a href="download/fcj.apk" download="fcj"><img border="0" src="image/fcj_icon.png"></img></a></p>';
        onInput(text);
    }

    function dhqp(args) {
        console.log('dhqp command called');
        console.log('args: '+args);
        window.open("http://dhqp.moonbear.cn");
    }

    function help(args) {
        let list = '';
        $(supportedCommand).each(function(index, el) {
            list += '<li>' + el + '</li>';
        });

        let text = '<p> Supported command list: <ul>' + list + '</ul></p>';
        text += '<p class="system"> Examples <string class="command">fcj</string></p>'
        onInput(text);
    }

    function alwaysFocus() {
        input.focus();
        input.blur(function() {
            input.focus();
        });
    }

    function outputHelpText(command) {
        let time = new Date().format("yyyy-MM-dd hh:mm:ss");
        let p = $('<p>').addClass('system').html(
            '[ ' + time + ' ] ' + 
            'Moonbear$ ' + '<span class="command">' + command + '</span>' + 
            ' 命令错误. See <span class="command">\'' + supportedCommand[0] + '\'</span>.');
        body.append(p);
        input.val('');
        return;
    }

    function onInput(command)
    {
        let time = new Date().format("yyyy-MM-dd hh:mm:ss");
        let p = $('<p>').addClass('system').html('[ ' + time + ' ] ' + 'Moonbear$ ' + command);
        body.append(p);
        input.val('');
        return;
    }

    $(document).keyup(function(event){  
        if (event.keyCode ==13) {
            let inputs = input.val().split(" --"),
                command = inputs[0],
                args = inputs[1] ? inputs[1]: '';

            alwaysFocus();
            updateInputBox();

            if (command == '') return onInput(' ');
            if ($.inArray(command, supportedCommand) < 0) return outputHelpText(command);
            onInput(command + ' ' + args);
            eval(command + "(args)");
        }
    });

    function updateInputBox() {
        var time = new Date().format("yyyy-MM-dd hh:mm:ss");
        timeBox.text('[ ' + time + ' ]');
    }
 
    alwaysFocus();
    updateInputBox();

});

Date.prototype.format = function(fmt){
    fmt = fmt.replace("yyyy",this.getFullYear());
    fmt = fmt.replace("yy",this.getFullYear() % 100);
    fmt = fmt.replace("MM",fix(this.getMonth() + 1));
    fmt = fmt.replace("dd",fix(this.getDate()));
    fmt = fmt.replace("hh",fix(this.getHours()));
    fmt = fmt.replace("mm",fix(this.getMinutes()));
    fmt = fmt.replace("ss",fix(this.getSeconds()));
    return fmt;

    function fix(n){
        return n < 10 ? "0" + n : n;
    }
}

function bootKooTerm() {
  const terminal = document.getElementById('terminal');
  if (!terminal || terminal.dataset.ready === '1') return;
  terminal.dataset.ready = '1';

  createNewLine();

  terminal.addEventListener('click', () => {
    const activeCommand = terminal.querySelector('.terminal-line.active .command');
    if (activeCommand) {
      activeCommand.focus();
    }
  });

  terminal.addEventListener('keydown', (e) => {
    const activeLine = terminal.querySelector('.terminal-line.active');
    if (!activeLine) return;

    const commandElement = activeLine.querySelector('.command');

    if (e.key === 'Enter') {
      e.preventDefault();

      const commandText = commandElement.textContent.trim();

      activeLine.classList.remove('active');
      commandElement.contentEditable = false;

      const shouldCreateNewLine = processCommand(commandText);

       if (shouldCreateNewLine !== false) {
        createNewLine();
      }
    }
  });

  function processCommand(command) {
    if (command === '') return true;

    const args = command.trim().split(/\s+/);
    const cmd = args[0].toLowerCase();

    let output = '';

    switch (cmd) {
      case 'help':
        output = `Available commands:
  help       - Show this help
  clear      - Clear the terminal
  date       - Show current date and time
  whoami     - Show current user
  echo       - Repeat the text
  fastfetch  - Show system info + ASCII
  exit       - Exit the terminal
  social     - socials of koo
  bio        - kooshesshh bio`;
        break;

      case 'clear':
        terminal.innerHTML = '';
        createNewLine();
        return false;

      case 'date':
        output = new Date().toLocaleString();
        break;

      case 'whoami':
        output = 'User';
        break;

      case 'exit':
        window.location.href = /terminal\.html$/i.test(window.location.pathname) ? 'index.html' : '/';
        return false;

      case 'bio':
        output = ' Hi guys, im Koo, a 16 years old programmer my languages are python, and cpp,\n i need some help in javascript >.<,\n but however, my pc its a thinkcentre m93p tiny with 10gb of ram,\n 128ssd and a i5 of 4th gen, and thats all OwO.';
        break;

      case 'social':
        output = ' My Socials:<br>' +
                 ' - <a href="https://github.com/KooShesshh" target="_blank" class="output-text">GitHub</a><br>' +
                 ' - <a href="https://youtube.com/@KooShesshh" target="_blank" class="output-text">Youtube</a><br>' +
                 ' - <a href="https://x.com/KooShesshh" target="_blank" class="output-text">X</a>';

        break;

      case 'fastfetch':
      case 'neofetch':
        appendFetch(`⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡀⠀⠀⠀⠀⠐⢄⣀⠀⠀⠀⠀⠀⠀                        User@KooTerm
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⢠⠆⠀⠀⠀⠀⠀⠀⢀⠤⠂⠀⢀⢠⣥⣶⣤⣶⣿⣿⣷⣦⣆⡄⠀⠀⠀                        ---------------
⢀⡞⡷⡅⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠠⡦⠁⠀⠀⠀⠀⠀⢀⡴⣡⢆⢵⣨⣾⣿⣿⣿⣿⣿⣿⣿⣟⣿⣿⣿⣶⣦⣄                        OS:     KooTerm Web
⠮⣷⣹⠆⡀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣠⣋⣀⣀⡀⢀⠀⢀⣦⣈⢍⣿⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣽⣷⣻                        Host:   Browser
⠈⠓⠮⣛⣦⣄⡀⠀⠀⠀⠀⣀⣴⣿⣿⣱⣖⣳⢮⣳⣒⡢⣉⢙⠻⢿⣿⣿⣿⠛⠛⠛⠛⠉⠉⠉⠉⠉⠉⠉⠉⠉⠁⠉                        Kernel: JavaScript
⠀⠀⠀⠀⠉⠉⡫⣱⣿⣿⣿⣿⣿⣿⣾⣻⡼⣯⢷⡳⣽⢳⡡⢎⠘⢦⠱⣋⢏⢄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀                        Shell:  KooTerm
⠀⠀⠀⠀⢀⢨⣔⡻⣾⢿⣽⣟⣿⢾⣷⣻⣽⣻⣞⡷⣯⣳⢳⡌⡜⢂⠓⣌⢊⠇⢧⠢⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀                        Theme:  Rainbow
⠀⠀⠀⢠⠏⠾⣽⣷⡿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⡵⣫⣘⠿⣻⡼⢮⢟⠙⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀                        Font:   Pixelify Sans
⠀⠀⠀⠀⠀⠀⠱⢋⣿⢿⣻⢿⡿⣿⣻⣟⣿⣻⡿⣿⣻⣿⣏⠿⡱⢟⢉⡾⠙⣰⢾⢻⡀⠘⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀                      
⠀⠀⠀⠀⠀⠀⠢⠄⠹⢫⣽⣾⡽⣳⣟⢾⣳⡽⣏⡿⣾⣳⡭⡿⢐⠎⠇⢁⢃⡿⡁⢄⢟⢱⠰⠀⠀⠀⠀⠀⠀⠀⠀⠀                      
⠀⠀⠀⠄⠐⠀⠆⢎⣀⣿⣟⣸⢼⡵⣾⢯⡷⣟⣯⢿⣻⣝⡯⣱⡾⡔⢼⠛⢨⠁⢻⣵⠙⠇⠢⡇⠀⠀⠀⠀⠀⠀⠀⠀                      
⠀⠀⡸⣆⣀⣘⣐⣠⣸⣿⣃⣀⣀⣙⣚⢧⣿⡽⢯⣟⣿⢯⢳⠟⡌⠈⣚⢦⡏⠈⠽⣷⠀⠀⠅⣸⡀⠀⠀⠀⠀⠀⠀⠀                      
⠀⠀⣿⣛⣿⣿⣿⢿⣿⣏⣉⣭⣭⣭⣝⣻⣻⣿⣿⣽⣾⣯⡗⣮⣰⣽⣷⣿⣶⠾⢻⠿⣷⣷⠶⢶⣿⣶⣦⣤⠀⠀⠀⠀                      
⠀⠀⠀⠘⣿⣿⠋⢼⣿⠻⣿⣿⣿⠀⠉⡟⠻⣮⣹⣿⣿⣿⣿⣿⣿⣿⣿⡣⣿⢻⣷⣮⣿⣿⡟⡿⠎⣿⡷⠞⠀⠀⠀⠀                      
⠀⠀⠀⠀⣟⡞⢀⣿⣿⡁⣿⣿⣿⣷⣾⠃⠀⢸⣿⣿⣿⢛⣿⣿⣿⣿⣿⣶⡧⢊⣿⢭⡟⢿⣥⠃⢰⣿⠀⠀⠀⠀⠀⠀                      
⠀⠀⠀⠃⣿⠧⡜⡡⣿⠄⠙⢿⣿⣿⡟⠀⡠⣾⣿⡿⠃⠉⠁⢻⣿⣿⣿⣿⠀⢻⣇⠺⠈⣄⢄⡮⣾⡏⠀⠀⠀⠀⠀⠀                      
⠀⠀⠀⠀⠸⣿⡙⠄⣿⣇⠀⠀⠈⠉⠉⠁⢠⣿⡟⠁⠐⠀⠀⠘⣿⡉⠉⠡⣈⣿⡅⠁⠆⠀⢐⣽⡟⠀⠀⠀⠀⠀⠀⠀                      
⠀⠀⠀⠀⠀⠈⠻⠾⣾⣿⣯⣤⣤⣤⣤⣶⠟⢁⠌⠡⠤⠀⢀⠀⠙⣿⣬⣵⣿⣿⣈⣈⣤⣴⡿⡏⠀⠀⠀⠀⠀⠀⠀⠀                      
⠀⠀⢀⠀⠀⠀⠀⠀⢹⣿⣿⣿⣿⣿⣶⡶⣴⣮⣤⣤⣴⣵⣦⣷⣿⣿⣿⣿⣿⣿⣭⠻⡭⢓⣯⠇⠀⠀⠀⠀⠀⠀⠀⠀                      
⠀⠀⡐⠀⠂⠠⡀⠀⠈⣿⣿⣿⣿⣿⣿⣿⣍⣁⣯⣷⡄⣹⠟⢉⣿⣿⣿⣿⣿⠃⢀⠄⠐⠠⠐⡇⠀⠀⠀⠀⠀⠀⠀⠀                      
⠀⠀⠃⠀⣼⠀⠄⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣼⣿⣵⣷⣶⣾⣿⣿⣿⣿⠟⡈⠤⣌⡆⠀⠈⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀`);
        return true;

      default:
        if (cmd === 'echo') {
          output = command.slice(5);
        } else {
          output = `Command not found: ${command}`;
        }
    }

    if (output) {
      output.split('\n').forEach(line => appendOutput(line));
    }

    return true;
  }

  function appendFetch(text) {
    const line = document.createElement('div');
    line.className = 'terminal-line fetch';
    const pre = document.createElement('pre');
    pre.className = 'fetch-art';
    pre.textContent = text;
    line.appendChild(pre);
    terminal.appendChild(line);
    const fit = () => fitFetch(pre);
    requestAnimationFrame(fit);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(fit);
  }

  function fitFetch(pre) {
    if (!pre.isConnected) return;
    const narrow = window.innerWidth <= 900;
    if (!narrow) {
      pre.style.fontSize = '13px';
      pre.style.transform = 'none';
      return;
    }
    const available = Math.max(terminal.clientWidth - 6, 120);
    let size = 13;
    pre.style.fontSize = size + 'px';
    pre.style.lineHeight = '1';
    const natural = pre.scrollWidth || 1;
    size = Math.max(4, (13 * available) / natural);
    pre.style.fontSize = size + 'px';
  }

  window.addEventListener('resize', () => {
    terminal.querySelectorAll('.fetch-art').forEach(fitFetch);
  });

  function appendOutput(text) {
    const line = document.createElement('div');
    line.className = 'terminal-line output';
    line.innerHTML = `<span class="output-text">${text}</span>`;
    terminal.appendChild(line);
  }

  function createNewLine() {
    const line = document.createElement('div');
    line.className = 'terminal-line active';
    line.innerHTML = `
      <span class="terminal-prompt">
        <span class="prompt-user">[User</span>
        <span class="prompt-at">@</span>
        <span class="prompt-host">KooTerm</span>
        <span class="prompt-path"> ~]</span>
        <span class="prompt-symbol">$</span>
      </span>
      <span class="command" contenteditable="true" spellcheck="false"></span>
    `;
    terminal.appendChild(line);
    line.querySelector('.command').focus();
    terminal.scrollTop = terminal.scrollHeight;
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', bootKooTerm);
} else {
  bootKooTerm();
}

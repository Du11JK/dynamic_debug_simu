<template>
  <n-card
    title="ASM"
    bordered="true"
    embedded="true"
    style="height: 100%"
  >
    <n-scrollbar style="height: 100%; max-height: 700px" x-scrollable="true">
      <n-config-provider :hljs="hljs">
        <n-code
          :code="asm_code"
          language="x86asm"
        />
      </n-config-provider>
    </n-scrollbar>
  </n-card>
</template>

<script>
  import { defineComponent } from 'vue'
  import hljs from 'highlight.js/lib/core'
  import x86asm from 'highlight.js/lib/languages/x86asm'

  hljs.registerLanguage('x86asm', x86asm)

  export default defineComponent({
    setup() {
      return {
        hljs,
        asm_code: `
        ##
00007FFDE9B006CE | 48:8DAC24 00FFFFFF       | lea rbp,qword ptr ss:[rsp-100]          |
00007FFDE9B006D6 | 48:81EC 00020000         | sub rsp,200                             |
00007FFDE9B006DD | 48:8B05 2C1E0B00         | mov rax,qword ptr ds:[7FFDE9BB2510]     |
00007FFDE9B006E4 | 48:33C4                  | xor rax,rsp                             |
00007FFDE9B006E7 | 48:8985 F0000000         | mov qword ptr ss:[rbp+F0],rax           |
00007FFDE9B006EE | 4C:8B05 13EB0A00         | mov r8,qword ptr ds:[7FFDE9BAF208]      | r8:&"吚x\\n€|$@"
00007FFDE9B006F5 | 48:8D05 EC160500         | lea rax,qword ptr ds:[7FFDE9B51DE8]     | 00007FFDE9B51DE8:L"apphelp.dll"
00007FFDE9B006FC | 33FF                     | xor edi,edi                             |
00007FFDE9B006FE | 48:894424 50             | mov qword ptr ss:[rsp+50],rax           | [rsp+50]:"LdrpInitializeProcess"
00007FFDE9B00703 | C74424 48 16001800       | mov dword ptr ss:[rsp+48],180016        |
00007FFDE9B0070B | 48:8D4424 70             | lea rax,qword ptr ss:[rsp+70]           |
00007FFDE9B00710 | 48:894424 68             | mov qword ptr ss:[rsp+68],rax           |
00007FFDE9B00715 | 48:8BF1                  | mov rsi,rcx                             | rsi:"LdrpInitializeProcess"
00007FFDE9B00718 | C74424 60 00000001       | mov dword ptr ss:[rsp+60],1000000       |
00007FFDE9B00720 | 41:BE 00010000           | mov r14d,100                            |
00007FFDE9B00726 | 66:897C24 70             | mov word ptr ss:[rsp+70],di             |
00007FFDE9B0072B | 4D:85C0                  | test r8,r8                              | r8:&"吚x\\n€|$@"
00007FFDE9B0072E | 74 2B                    | je ntdll.7FFDE9B0075B                   |
00007FFDE9B00730 | 8B1425 3003FE7F          | mov edx,dword ptr ds:[7FFE0330]         |
00007FFDE9B00737 | 8D4F 40                  | lea ecx,qword ptr ds:[rdi+40]           |
00007FFDE9B0073A | 8BC2                     | mov eax,edx                             |
00007FFDE9B0073C | 83E0 3F                  | and eax,3F                              |
00007FFDE9B0073F | 2BC8                     | sub ecx,eax                             |
00007FFDE9B00741 | 8BC2                     | mov eax,edx                             |
00007FFDE9B00743 | 49:D3C8                  | ror r8,cl                               | r8:&"吚x\\n€|$@"
00007FFDE9B00746 | 4C:33C0                  | xor r8,rax                              | r8:&"吚x\\n€|$@"
00007FFDE9B00749 | B8 010000C0              | mov eax,C0000001                        |
00007FFDE9B0074E | 4C:8906                  | mov qword ptr ds:[rsi],r8               | rsi:"LdrpInitializeProcess", r8:&"吚x\\n€|$@"
00007FFDE9B00751 | 0F44F8                   | cmove edi,eax                           |
00007FFDE9B00754 | 8BDF                     | mov ebx,edi                             |
00007FFDE9B00756 | E9 4B010000              | jmp ntdll.7FFDE9B008A6                  |
00007FFDE9B0075B | 48:8D5424 48             | lea rdx,qword ptr ss:[rsp+48]           | [rsp+48]:"LdrpInitializeProcess"
00007FFDE9B00760 | 48:8D4C24 60             | lea rcx,qword ptr ss:[rsp+60]           |
00007FFDE9B00765 | E8 CEA0F4FF              | call ntdll.7FFDE9A4A838                 |
00007FFDE9B0076A | 8BD8                     | mov ebx,eax                             |
00007FFDE9B0076C | 85C0                     | test eax,eax                            |
00007FFDE9B0076E | 0F88 1E010000            | js ntdll.7FFDE9B00892                   |
00007FFDE9B00774 | 4C:8D45 70               | lea r8,qword ptr ss:[rbp+70]            |
00007FFDE9B00778 | BA 01400000              | mov edx,4001                            |
00007FFDE9B0077D | 33C9                     | xor ecx,ecx                             |
00007FFDE9B0077F | E8 3462F4FF              | call ntdll.7FFDE9A469B8                 |
00007FFDE9B00784 | 4C:8D4C24 40             | lea r9,qword ptr ss:[rsp+40]            |
00007FFDE9B00789 | 45:33C0                  | xor r8d,r8d                             | r8d:&"吚x\\n€|$@"
00007FFDE9B0078C | 48:8D55 70               | lea rdx,qword ptr ss:[rbp+70]           |
00007FFDE9B00790 | 48:8D4C24 60             | lea rcx,qword ptr ss:[rsp+60]           |
00007FFDE9B00795 | E8 A26BF4FF              | call ntdll.7FFDE9A4733C                 |
00007FFDE9B0079A | 8BD8                     | mov ebx,eax                             |
00007FFDE9B0079C | 40:38BD EC000000         | cmp byte ptr ss:[rbp+EC],dil            |
00007FFDE9B007A3 | 74 09                    | je ntdll.7FFDE9B007AE                   |
        `
      }
    }
  })
</script>
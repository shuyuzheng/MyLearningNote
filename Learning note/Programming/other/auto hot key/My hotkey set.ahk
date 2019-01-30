; Script Function:
;       Disables trackpad for 500ms any time a key is pressed (prevents accidental mouse clicks)
;

#NoEnv  ; Recommended for performance and compatibility with future AutoHotkey releases.
SendMode Input  ; Recommended for new scripts due to its superior speed and reliability.
SetWorkingDir %A_ScriptDir%  ; Ensures a consistent starting directory.

;keyboard hook code credit: http://www.autohotkey.com/forum/post-127490.html#127490
#Persistent
OnExit, Unhook

hHookKeybd := SetWindowsHookEx(WH_KEYBOARD_LL   := 13, RegisterCallback("Keyboard", "Fast"))
Return

ReenableTrackpad:
BlockInput, MouseMoveOff
Return

Unhook:
UnhookWindowsHookEx(hHookKeybd)
ExitApp

Keyboard(nCode, wParam, lParam)
{
   Critical
   If !nCode
   {
      BlockInput, MouseMove
      SetTimer, ReenableTrackpad, 500
   }
   Return CallNextHookEx(nCode, wParam, lParam)
}

SetWindowsHookEx(idHook, pfn)
{
   Return DllCall("SetWindowsHookEx", "int", idHook, "Uint", pfn, "Uint", DllCall("GetModuleHandle", "Uint", 0), "Uint", 0)
}

UnhookWindowsHookEx(hHook)
{
   Return DllCall("UnhookWindowsHookEx", "Uint", hHook)
}

CallNextHookEx(nCode, wParam, lParam, hHook = 0)
{
   Return DllCall("CallNextHookEx", "Uint", hHook, "int", nCode, "Uint", wParam, "Uint", lParam)
}



; Move mouse and course in vim-style navigation.

#If GetKeyState("CapsLock", "T")=1 ;Disable and enable this mode by "CapsLock" 
h::Send,{Left}
l::Send,{Right}
k::Send,{Up}
j::Send,{Down}

!k::MouseMove, 0, -20, 0, R   ; Move cursor upward
!j::MouseMove, 0, 20, 0, R  ; Move cursor downward
!h::MouseMove, -20, 0, 0, R ; Move cursor to the left
!l::MouseMove, 20, 0, 0, R ; Move cursor to the right

Ralt::LButton

!b::Send % (toggle := !toggle) 
 ? "{LButton Down}" 
 : "{LButton Up}"

#If toggle ;disable the left mouse button
   LButton::Return
#If

#If 
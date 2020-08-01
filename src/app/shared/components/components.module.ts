import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from "src/app/shared/components/loader/loader.component";
import { StateDropdownComponent } from "src/app/shared/components/state-dropdown/state-dropdown.component";
import { NgMaterialModule } from "src/app/core/designs/ngmaterial.module";
import { ChatBotComponent } from "src/app/shared/components/chat-bot/chat-bot.component";



@NgModule({
  declarations: [
    LoaderComponent,
    StateDropdownComponent,
    ChatBotComponent
  
  ],
  imports: [
    CommonModule,
    NgMaterialModule
 
  ],
  exports : [
    LoaderComponent,
    StateDropdownComponent,
    ChatBotComponent
  ]
})
export class ComponentsModule { }

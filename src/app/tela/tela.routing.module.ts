import { TelaComponent } from './tela.component';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { FonteComponent } from 'app/tela/fonte/fonte.component';
import { HdComponent } from 'app/tela/hd/hd.component';
import { MemoriaComponent } from 'app/tela/memoria/memoria.component';
import { PlacaDeAudioComponent } from 'app/tela/placa-de-audio/placa-de-audio.component';
import { PlacaDeVideoComponent } from 'app/tela/placa-de-video/placa-de-video.component';
import { PlacaDeRedeComponent } from 'app/tela/placa-de-rede/placa-de-rede.component';
import { PlacaMaeComponent } from 'app/tela/placa-mae/placa-mae.component';
import { PortasComponent } from 'app/tela/portas/portas.component';
import { ProcessadorComponent } from 'app/tela/processador/processador.component';

const telasRoutes = [
    {path: 'tela', component: TelaComponent, children: [
        {path: 'fonte', component: FonteComponent},
        {path: 'hd', component: HdComponent},
        {path: 'memoria', component: MemoriaComponent},
        {path: 'placa-de-audio', component: PlacaDeAudioComponent},
        {path: 'placa-de-rede', component: PlacaDeRedeComponent},
        {path: 'placa-de-video', component: PlacaDeVideoComponent},
        {path: 'placa-mae', component: PlacaMaeComponent},
        {path: 'portas', component: PortasComponent},
        {path: 'processador', component: ProcessadorComponent},

    ]},
    


];

@NgModule({
    imports: [
        RouterModule.forChild(telasRoutes)
    ],
    exports: [RouterModule]

})
export class TelaRoutingModule{

}
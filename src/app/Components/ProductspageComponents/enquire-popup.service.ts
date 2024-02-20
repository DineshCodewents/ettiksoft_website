import { ApplicationRef, ComponentFactoryResolver, ComponentRef, EmbeddedViewRef, Injectable, Injector, Type } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnquirePopupService {
  private modalRef: ComponentRef<any> | null = null;

  openPopup(componentType: Type<any>): void {
    this.closePopup();
    const factory = this.componentFactoryResolver.resolveComponentFactory(componentType);
    this.modalRef = factory.create(this.injector);
    this.appRef.attachView(this.modalRef.hostView);
    const domElem = (this.modalRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
    document.body.appendChild(domElem);
    document.body.classList.add('modal-open');
  }

  closePopup(): void {
    if (this.modalRef) {
      this.appRef.detachView(this.modalRef.hostView);
      this.modalRef.destroy();
      this.modalRef = null;
      document.body.classList.remove('modal-open');
    }
  }

  constructor(
    private appRef: ApplicationRef,
    private injector: Injector,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {}

}

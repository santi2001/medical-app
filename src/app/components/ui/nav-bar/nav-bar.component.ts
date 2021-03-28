import { MediaMatcher } from '@angular/cdk/layout'
import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core'
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit, OnDestroy {
  mobileQuery: MediaQueryList
  fillerNav = [
    { link: '/pacientes', nombre: 'pacientes' },
    { link: '/turnos', nombre: 'turnos' }
  ]

  ngOnInit(): void {}
  private _mobileQueryListener: () => void
  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 1000px)')
    this._mobileQueryListener = () => changeDetectorRef.detectChanges()
    this.mobileQuery.addListener(this._mobileQueryListener)
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener)
  }
}

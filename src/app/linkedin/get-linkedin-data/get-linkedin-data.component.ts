import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-get-linkedin-data',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './get-linkedin-data.component.html',
  styleUrl: './get-linkedin-data.component.css',
})
export class GetLinkedinDataComponent implements OnInit {
  linkedinData: any[] = [];
  selectedIds: any[] = [];
  notSelectedIds: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getMail();
  }

  private getMail() {
    this.http
      .get(environment.API_BASEURL + '/api/getLinkedinData/getData')
      .subscribe((res: any) => {
        this.linkedinData = res;
      });
  }

  isSelected(id: number): boolean {
    return this.selectedIds.includes(id);
  }

  toggleSelection(id: number): void {
    if (this.selectedIds.includes(id)) {
      this.selectedIds = this.selectedIds.filter(
        (selectedId) => selectedId !== id
      );
    } else {
      this.selectedIds.push(id);
    }
  }

  areAllSelected(): boolean {
    return (
      this.linkedinData.length > 0 &&
      this.selectedIds.length === this.linkedinData.length
    );
  }

  toggleAllSelections(event: Event): void {
    const checked = (event.target as HTMLInputElement).checked;

    if (checked) {
      this.selectedIds = this.linkedinData.map((item) => item._id);
    } else {
      this.selectedIds = [];
    }
  }

  filterNotSelected() {
    this.notSelectedIds = this.linkedinData
      .map((item) => {
        if (!this.selectedIds.includes(item._id)) {
          return item._id;
        }
      })
      .filter((id) => id !== undefined);
  }

  onSave() {
    this.filterNotSelected();
    console.log(this.selectedIds);
    console.log(this.notSelectedIds);

    this.http
      .post(environment.API_BASEURL + '/api/getLinkedinData/postLinkedinSelectionData', {
        selectedIds: this.selectedIds,
        notSelectedIds: this.notSelectedIds,
      })
      .subscribe((res: any) => {
        console.log(res);
      });
  }
}

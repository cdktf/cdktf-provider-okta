// https://www.terraform.io/docs/providers/okta/d/groups
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOktaGroupsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Searches the name property of groups for matching value
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/d/groups#q DataOktaGroups#q}
  */
  readonly q?: string;
  /**
  * Searches for groups with a supported filtering expression for all attributes except for '_embedded', '_links', and 'objectClass'
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/d/groups#search DataOktaGroups#search}
  */
  readonly search?: string;
  /**
  * Type of the group. When specified in the terraform resource, will act as a filter when searching for the groups
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/d/groups#type DataOktaGroups#type}
  */
  readonly type?: string;
}
export class DataOktaGroupsGroups extends cdktf.ComplexComputedList {

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/okta/d/groups okta_groups}
*/
export class DataOktaGroups extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "okta_groups";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/okta/d/groups okta_groups} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOktaGroupsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataOktaGroupsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'okta_groups',
      terraformGeneratorMetadata: {
        providerName: 'okta'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._q = config.q;
    this._search = config.search;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // groups - computed: true, optional: false, required: false
  public groups(index: string) {
    return new DataOktaGroupsGroups(this, 'groups', index, false);
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // q - computed: false, optional: true, required: false
  private _q?: string; 
  public get q() {
    return this.getStringAttribute('q');
  }
  public set q(value: string) {
    this._q = value;
  }
  public resetQ() {
    this._q = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qInput() {
    return this._q;
  }

  // search - computed: false, optional: true, required: false
  private _search?: string; 
  public get search() {
    return this.getStringAttribute('search');
  }
  public set search(value: string) {
    this._search = value;
  }
  public resetSearch() {
    this._search = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchInput() {
    return this._search;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      q: cdktf.stringToTerraform(this._q),
      search: cdktf.stringToTerraform(this._search),
      type: cdktf.stringToTerraform(this._type),
    };
  }
}

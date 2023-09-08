// https://registry.terraform.io/providers/okta/okta/4.4.0/docs/resources/link_value
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LinkValueConfig extends cdktf.TerraformMetaArguments {
  /**
  * Set of User IDs or login values of the users to be assigned the 'associated' relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.0/docs/resources/link_value#associated_user_ids LinkValue#associated_user_ids}
  */
  readonly associatedUserIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.0/docs/resources/link_value#id LinkValue#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the 'primary' relationship being assigned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.0/docs/resources/link_value#primary_name LinkValue#primary_name}
  */
  readonly primaryName: string;
  /**
  * User ID to be assigned to 'primary' for the 'associated' user in the specified relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.0/docs/resources/link_value#primary_user_id LinkValue#primary_user_id}
  */
  readonly primaryUserId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/okta/okta/4.4.0/docs/resources/link_value okta_link_value}
*/
export class LinkValue extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "okta_link_value";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/okta/okta/4.4.0/docs/resources/link_value okta_link_value} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LinkValueConfig
  */
  public constructor(scope: Construct, id: string, config: LinkValueConfig) {
    super(scope, id, {
      terraformResourceType: 'okta_link_value',
      terraformGeneratorMetadata: {
        providerName: 'okta',
        providerVersion: '4.4.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._associatedUserIds = config.associatedUserIds;
    this._id = config.id;
    this._primaryName = config.primaryName;
    this._primaryUserId = config.primaryUserId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // associated_user_ids - computed: false, optional: true, required: false
  private _associatedUserIds?: string[]; 
  public get associatedUserIds() {
    return cdktf.Fn.tolist(this.getListAttribute('associated_user_ids'));
  }
  public set associatedUserIds(value: string[]) {
    this._associatedUserIds = value;
  }
  public resetAssociatedUserIds() {
    this._associatedUserIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get associatedUserIdsInput() {
    return this._associatedUserIds;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // primary_name - computed: false, optional: false, required: true
  private _primaryName?: string; 
  public get primaryName() {
    return this.getStringAttribute('primary_name');
  }
  public set primaryName(value: string) {
    this._primaryName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryNameInput() {
    return this._primaryName;
  }

  // primary_user_id - computed: false, optional: false, required: true
  private _primaryUserId?: string; 
  public get primaryUserId() {
    return this.getStringAttribute('primary_user_id');
  }
  public set primaryUserId(value: string) {
    this._primaryUserId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryUserIdInput() {
    return this._primaryUserId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      associated_user_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._associatedUserIds),
      id: cdktf.stringToTerraform(this._id),
      primary_name: cdktf.stringToTerraform(this._primaryName),
      primary_user_id: cdktf.stringToTerraform(this._primaryUserId),
    };
  }
}

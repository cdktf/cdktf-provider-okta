// https://www.terraform.io/docs/providers/okta/r/app_group_assignments
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppGroupAssignmentsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_group_assignments#app_id AppGroupAssignments#app_id}
  */
  readonly appId: string;
  /**
  * group block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_group_assignments#group AppGroupAssignments#group}
  */
  readonly group: AppGroupAssignmentsGroup[] | cdktf.IResolvable;
}
export interface AppGroupAssignmentsGroup {
  /**
  * A group to associate with the application
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_group_assignments#id AppGroupAssignments#id}
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_group_assignments#priority AppGroupAssignments#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_group_assignments#profile AppGroupAssignments#profile}
  */
  readonly profile?: string;
}

export function appGroupAssignmentsGroupToTerraform(struct?: AppGroupAssignmentsGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    priority: cdktf.numberToTerraform(struct!.priority),
    profile: cdktf.stringToTerraform(struct!.profile),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/okta/r/app_group_assignments okta_app_group_assignments}
*/
export class AppGroupAssignments extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "okta_app_group_assignments";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/okta/r/app_group_assignments okta_app_group_assignments} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppGroupAssignmentsConfig
  */
  public constructor(scope: Construct, id: string, config: AppGroupAssignmentsConfig) {
    super(scope, id, {
      terraformResourceType: 'okta_app_group_assignments',
      terraformGeneratorMetadata: {
        providerName: 'okta'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._appId = config.appId;
    this._group = config.group;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_id - computed: false, optional: false, required: true
  private _appId?: string; 
  public get appId() {
    return this.getStringAttribute('app_id');
  }
  public set appId(value: string) {
    this._appId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appIdInput() {
    return this._appId;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // group - computed: false, optional: false, required: true
  private _group?: AppGroupAssignmentsGroup[] | cdktf.IResolvable; 
  public get group() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('group');
  }
  public set group(value: AppGroupAssignmentsGroup[] | cdktf.IResolvable) {
    this._group = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      app_id: cdktf.stringToTerraform(this._appId),
      group: cdktf.listMapper(appGroupAssignmentsGroupToTerraform)(this._group),
    };
  }
}

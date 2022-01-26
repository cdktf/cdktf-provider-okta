// https://www.terraform.io/docs/providers/okta/r/profile_mapping
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProfileMappingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether apply the changes to all users with this profile after updating or creating the these mappings.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/profile_mapping#always_apply ProfileMapping#always_apply}
  */
  readonly alwaysApply?: boolean | cdktf.IResolvable;
  /**
  * When turned on this flag will trigger the provider to delete mapping properties that are not defined in config. By default, we do not delete missing properties.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/profile_mapping#delete_when_absent ProfileMapping#delete_when_absent}
  */
  readonly deleteWhenAbsent?: boolean | cdktf.IResolvable;
  /**
  * The source id of the mapping to manage.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/profile_mapping#source_id ProfileMapping#source_id}
  */
  readonly sourceId: string;
  /**
  * The target id of the mapping to manage.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/profile_mapping#target_id ProfileMapping#target_id}
  */
  readonly targetId: string;
  /**
  * mappings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/profile_mapping#mappings ProfileMapping#mappings}
  */
  readonly mappings?: ProfileMappingMappings[] | cdktf.IResolvable;
}
export interface ProfileMappingMappings {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/profile_mapping#expression ProfileMapping#expression}
  */
  readonly expression: string;
  /**
  * The mapping property key.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/profile_mapping#id ProfileMapping#id}
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/profile_mapping#push_status ProfileMapping#push_status}
  */
  readonly pushStatus?: string;
}

export function profileMappingMappingsToTerraform(struct?: ProfileMappingMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expression: cdktf.stringToTerraform(struct!.expression),
    id: cdktf.stringToTerraform(struct!.id),
    push_status: cdktf.stringToTerraform(struct!.pushStatus),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/okta/r/profile_mapping okta_profile_mapping}
*/
export class ProfileMapping extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "okta_profile_mapping";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/okta/r/profile_mapping okta_profile_mapping} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProfileMappingConfig
  */
  public constructor(scope: Construct, id: string, config: ProfileMappingConfig) {
    super(scope, id, {
      terraformResourceType: 'okta_profile_mapping',
      terraformGeneratorMetadata: {
        providerName: 'okta'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._alwaysApply = config.alwaysApply;
    this._deleteWhenAbsent = config.deleteWhenAbsent;
    this._sourceId = config.sourceId;
    this._targetId = config.targetId;
    this._mappings = config.mappings;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // always_apply - computed: false, optional: true, required: false
  private _alwaysApply?: boolean | cdktf.IResolvable; 
  public get alwaysApply() {
    return this.getBooleanAttribute('always_apply');
  }
  public set alwaysApply(value: boolean | cdktf.IResolvable) {
    this._alwaysApply = value;
  }
  public resetAlwaysApply() {
    this._alwaysApply = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alwaysApplyInput() {
    return this._alwaysApply;
  }

  // delete_when_absent - computed: false, optional: true, required: false
  private _deleteWhenAbsent?: boolean | cdktf.IResolvable; 
  public get deleteWhenAbsent() {
    return this.getBooleanAttribute('delete_when_absent');
  }
  public set deleteWhenAbsent(value: boolean | cdktf.IResolvable) {
    this._deleteWhenAbsent = value;
  }
  public resetDeleteWhenAbsent() {
    this._deleteWhenAbsent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteWhenAbsentInput() {
    return this._deleteWhenAbsent;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // source_id - computed: false, optional: false, required: true
  private _sourceId?: string; 
  public get sourceId() {
    return this.getStringAttribute('source_id');
  }
  public set sourceId(value: string) {
    this._sourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIdInput() {
    return this._sourceId;
  }

  // source_name - computed: true, optional: false, required: false
  public get sourceName() {
    return this.getStringAttribute('source_name');
  }

  // source_type - computed: true, optional: false, required: false
  public get sourceType() {
    return this.getStringAttribute('source_type');
  }

  // target_id - computed: false, optional: false, required: true
  private _targetId?: string; 
  public get targetId() {
    return this.getStringAttribute('target_id');
  }
  public set targetId(value: string) {
    this._targetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetIdInput() {
    return this._targetId;
  }

  // target_name - computed: true, optional: false, required: false
  public get targetName() {
    return this.getStringAttribute('target_name');
  }

  // target_type - computed: true, optional: false, required: false
  public get targetType() {
    return this.getStringAttribute('target_type');
  }

  // mappings - computed: false, optional: true, required: false
  private _mappings?: ProfileMappingMappings[] | cdktf.IResolvable; 
  public get mappings() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('mappings')));
  }
  public set mappings(value: ProfileMappingMappings[] | cdktf.IResolvable) {
    this._mappings = value;
  }
  public resetMappings() {
    this._mappings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mappingsInput() {
    return this._mappings;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      always_apply: cdktf.booleanToTerraform(this._alwaysApply),
      delete_when_absent: cdktf.booleanToTerraform(this._deleteWhenAbsent),
      source_id: cdktf.stringToTerraform(this._sourceId),
      target_id: cdktf.stringToTerraform(this._targetId),
      mappings: cdktf.listMapper(profileMappingMappingsToTerraform)(this._mappings),
    };
  }
}

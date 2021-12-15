// https://www.terraform.io/docs/providers/okta/r/org_support.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OrgSupportConfig extends cdktf.TerraformMetaArguments {
  /**
  * Number of days the support should be extended by
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/org_support.html#extend_by OrgSupport#extend_by}
  */
  readonly extendBy?: number;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/okta/r/org_support.html okta_org_support}
*/
export class OrgSupport extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "okta_org_support";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/okta/r/org_support.html okta_org_support} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OrgSupportConfig = {}
  */
  public constructor(scope: Construct, id: string, config: OrgSupportConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'okta_org_support',
      terraformGeneratorMetadata: {
        providerName: 'okta'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._extendBy = config.extendBy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // expiration - computed: true, optional: false, required: false
  public get expiration() {
    return this.getStringAttribute('expiration');
  }

  // extend_by - computed: false, optional: true, required: false
  private _extendBy?: number; 
  public get extendBy() {
    return this.getNumberAttribute('extend_by');
  }
  public set extendBy(value: number) {
    this._extendBy = value;
  }
  public resetExtendBy() {
    this._extendBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extendByInput() {
    return this._extendBy;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      extend_by: cdktf.numberToTerraform(this._extendBy),
    };
  }
}

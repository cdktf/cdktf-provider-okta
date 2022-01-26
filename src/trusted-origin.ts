// https://www.terraform.io/docs/providers/okta/r/trusted_origin
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TrustedOriginConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether the Trusted Origin is active or not - can only be issued post-creation
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/trusted_origin#active TrustedOrigin#active}
  */
  readonly active?: boolean | cdktf.IResolvable;
  /**
  * Unique name for this trusted origin
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/trusted_origin#name TrustedOrigin#name}
  */
  readonly name: string;
  /**
  * Unique origin URL for this trusted origin
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/trusted_origin#origin TrustedOrigin#origin}
  */
  readonly origin: string;
  /**
  * Scopes of the Trusted Origin - can either be CORS or REDIRECT only
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/trusted_origin#scopes TrustedOrigin#scopes}
  */
  readonly scopes: string[];
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/okta/r/trusted_origin okta_trusted_origin}
*/
export class TrustedOrigin extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "okta_trusted_origin";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/okta/r/trusted_origin okta_trusted_origin} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TrustedOriginConfig
  */
  public constructor(scope: Construct, id: string, config: TrustedOriginConfig) {
    super(scope, id, {
      terraformResourceType: 'okta_trusted_origin',
      terraformGeneratorMetadata: {
        providerName: 'okta'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._active = config.active;
    this._name = config.name;
    this._origin = config.origin;
    this._scopes = config.scopes;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active - computed: false, optional: true, required: false
  private _active?: boolean | cdktf.IResolvable; 
  public get active() {
    return this.getBooleanAttribute('active');
  }
  public set active(value: boolean | cdktf.IResolvable) {
    this._active = value;
  }
  public resetActive() {
    this._active = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeInput() {
    return this._active;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // origin - computed: false, optional: false, required: true
  private _origin?: string; 
  public get origin() {
    return this.getStringAttribute('origin');
  }
  public set origin(value: string) {
    this._origin = value;
  }
  // Temporarily expose input value. Use with caution.
  public get originInput() {
    return this._origin;
  }

  // scopes - computed: false, optional: false, required: true
  private _scopes?: string[]; 
  public get scopes() {
    return this.getListAttribute('scopes');
  }
  public set scopes(value: string[]) {
    this._scopes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesInput() {
    return this._scopes;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      active: cdktf.booleanToTerraform(this._active),
      name: cdktf.stringToTerraform(this._name),
      origin: cdktf.stringToTerraform(this._origin),
      scopes: cdktf.listMapper(cdktf.stringToTerraform)(this._scopes),
    };
  }
}

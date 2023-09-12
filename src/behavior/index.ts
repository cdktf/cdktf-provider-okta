// https://registry.terraform.io/providers/okta/okta/4.4.1/docs/resources/behavior
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BehaviorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.1/docs/resources/behavior#id Behavior#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Determines the method and level of detail used to evaluate the behavior.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.1/docs/resources/behavior#location_granularity_type Behavior#location_granularity_type}
  */
  readonly locationGranularityType?: string;
  /**
  * Name of the behavior
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.1/docs/resources/behavior#name Behavior#name}
  */
  readonly name: string;
  /**
  * The number of recent authentications used to evaluate the behavior.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.1/docs/resources/behavior#number_of_authentications Behavior#number_of_authentications}
  */
  readonly numberOfAuthentications?: number;
  /**
  * Radius from location (in kilometers)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.1/docs/resources/behavior#radius_from_location Behavior#radius_from_location}
  */
  readonly radiusFromLocation?: number;
  /**
  * Behavior status: ACTIVE or INACTIVE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.1/docs/resources/behavior#status Behavior#status}
  */
  readonly status?: string;
  /**
  * Behavior type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.1/docs/resources/behavior#type Behavior#type}
  */
  readonly type: string;
  /**
  * Velocity (in kilometers per hour).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.1/docs/resources/behavior#velocity Behavior#velocity}
  */
  readonly velocity?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/okta/okta/4.4.1/docs/resources/behavior okta_behavior}
*/
export class Behavior extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "okta_behavior";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/okta/okta/4.4.1/docs/resources/behavior okta_behavior} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BehaviorConfig
  */
  public constructor(scope: Construct, id: string, config: BehaviorConfig) {
    super(scope, id, {
      terraformResourceType: 'okta_behavior',
      terraformGeneratorMetadata: {
        providerName: 'okta',
        providerVersion: '4.4.1',
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
    this._id = config.id;
    this._locationGranularityType = config.locationGranularityType;
    this._name = config.name;
    this._numberOfAuthentications = config.numberOfAuthentications;
    this._radiusFromLocation = config.radiusFromLocation;
    this._status = config.status;
    this._type = config.type;
    this._velocity = config.velocity;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // location_granularity_type - computed: false, optional: true, required: false
  private _locationGranularityType?: string; 
  public get locationGranularityType() {
    return this.getStringAttribute('location_granularity_type');
  }
  public set locationGranularityType(value: string) {
    this._locationGranularityType = value;
  }
  public resetLocationGranularityType() {
    this._locationGranularityType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationGranularityTypeInput() {
    return this._locationGranularityType;
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

  // number_of_authentications - computed: false, optional: true, required: false
  private _numberOfAuthentications?: number; 
  public get numberOfAuthentications() {
    return this.getNumberAttribute('number_of_authentications');
  }
  public set numberOfAuthentications(value: number) {
    this._numberOfAuthentications = value;
  }
  public resetNumberOfAuthentications() {
    this._numberOfAuthentications = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfAuthenticationsInput() {
    return this._numberOfAuthentications;
  }

  // radius_from_location - computed: false, optional: true, required: false
  private _radiusFromLocation?: number; 
  public get radiusFromLocation() {
    return this.getNumberAttribute('radius_from_location');
  }
  public set radiusFromLocation(value: number) {
    this._radiusFromLocation = value;
  }
  public resetRadiusFromLocation() {
    this._radiusFromLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusFromLocationInput() {
    return this._radiusFromLocation;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // velocity - computed: false, optional: true, required: false
  private _velocity?: number; 
  public get velocity() {
    return this.getNumberAttribute('velocity');
  }
  public set velocity(value: number) {
    this._velocity = value;
  }
  public resetVelocity() {
    this._velocity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get velocityInput() {
    return this._velocity;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      location_granularity_type: cdktf.stringToTerraform(this._locationGranularityType),
      name: cdktf.stringToTerraform(this._name),
      number_of_authentications: cdktf.numberToTerraform(this._numberOfAuthentications),
      radius_from_location: cdktf.numberToTerraform(this._radiusFromLocation),
      status: cdktf.stringToTerraform(this._status),
      type: cdktf.stringToTerraform(this._type),
      velocity: cdktf.numberToTerraform(this._velocity),
    };
  }
}

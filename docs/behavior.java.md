# `okta_behavior`

Refer to the Terraform Registory for docs: [`okta_behavior`](https://registry.terraform.io/providers/okta/okta/4.0.1/docs/resources/behavior).

# `behavior` Submodule <a name="`behavior` Submodule" id="@cdktf/provider-okta.behavior"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Behavior <a name="Behavior" id="@cdktf/provider-okta.behavior.Behavior"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.0.1/docs/resources/behavior okta_behavior}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.behavior.Behavior.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.behavior.Behavior;

Behavior.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .name(java.lang.String)
    .type(java.lang.String)
//  .id(java.lang.String)
//  .locationGranularityType(java.lang.String)
//  .numberOfAuthentications(java.lang.Number)
//  .radiusFromLocation(java.lang.Number)
//  .status(java.lang.String)
//  .velocity(java.lang.Number)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the behavior. |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | Behavior type. |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.1/docs/resources/behavior#id Behavior#id}. |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.Initializer.parameter.locationGranularityType">locationGranularityType</a></code> | <code>java.lang.String</code> | Determines the method and level of detail used to evaluate the behavior. |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.Initializer.parameter.numberOfAuthentications">numberOfAuthentications</a></code> | <code>java.lang.Number</code> | The number of recent authentications used to evaluate the behavior. |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.Initializer.parameter.radiusFromLocation">radiusFromLocation</a></code> | <code>java.lang.Number</code> | Radius from location (in kilometers). |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.Initializer.parameter.status">status</a></code> | <code>java.lang.String</code> | Behavior status: ACTIVE or INACTIVE. |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.Initializer.parameter.velocity">velocity</a></code> | <code>java.lang.Number</code> | Velocity (in kilometers per hour). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.behavior.Behavior.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.behavior.Behavior.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.behavior.Behavior.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.behavior.Behavior.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.behavior.Behavior.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.behavior.Behavior.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.behavior.Behavior.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.behavior.Behavior.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.behavior.Behavior.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.behavior.Behavior.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the behavior.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.1/docs/resources/behavior#name Behavior#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-okta.behavior.Behavior.Initializer.parameter.type"></a>

- *Type:* java.lang.String

Behavior type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.1/docs/resources/behavior#type Behavior#type}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.behavior.Behavior.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.1/docs/resources/behavior#id Behavior#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `locationGranularityType`<sup>Optional</sup> <a name="locationGranularityType" id="@cdktf/provider-okta.behavior.Behavior.Initializer.parameter.locationGranularityType"></a>

- *Type:* java.lang.String

Determines the method and level of detail used to evaluate the behavior.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.1/docs/resources/behavior#location_granularity_type Behavior#location_granularity_type}

---

##### `numberOfAuthentications`<sup>Optional</sup> <a name="numberOfAuthentications" id="@cdktf/provider-okta.behavior.Behavior.Initializer.parameter.numberOfAuthentications"></a>

- *Type:* java.lang.Number

The number of recent authentications used to evaluate the behavior.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.1/docs/resources/behavior#number_of_authentications Behavior#number_of_authentications}

---

##### `radiusFromLocation`<sup>Optional</sup> <a name="radiusFromLocation" id="@cdktf/provider-okta.behavior.Behavior.Initializer.parameter.radiusFromLocation"></a>

- *Type:* java.lang.Number

Radius from location (in kilometers).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.1/docs/resources/behavior#radius_from_location Behavior#radius_from_location}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-okta.behavior.Behavior.Initializer.parameter.status"></a>

- *Type:* java.lang.String

Behavior status: ACTIVE or INACTIVE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.1/docs/resources/behavior#status Behavior#status}

---

##### `velocity`<sup>Optional</sup> <a name="velocity" id="@cdktf/provider-okta.behavior.Behavior.Initializer.parameter.velocity"></a>

- *Type:* java.lang.Number

Velocity (in kilometers per hour).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.1/docs/resources/behavior#velocity Behavior#velocity}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.resetLocationGranularityType">resetLocationGranularityType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.resetNumberOfAuthentications">resetNumberOfAuthentications</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.resetRadiusFromLocation">resetRadiusFromLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.resetVelocity">resetVelocity</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-okta.behavior.Behavior.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-okta.behavior.Behavior.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.behavior.Behavior.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.behavior.Behavior.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-okta.behavior.Behavior.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.behavior.Behavior.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-okta.behavior.Behavior.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-okta.behavior.Behavior.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-okta.behavior.Behavior.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-okta.behavior.Behavior.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.behavior.Behavior.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-okta.behavior.Behavior.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.behavior.Behavior.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-okta.behavior.Behavior.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.behavior.Behavior.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-okta.behavior.Behavior.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.behavior.Behavior.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-okta.behavior.Behavior.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.behavior.Behavior.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-okta.behavior.Behavior.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.behavior.Behavior.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-okta.behavior.Behavior.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.behavior.Behavior.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-okta.behavior.Behavior.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.behavior.Behavior.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-okta.behavior.Behavior.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.behavior.Behavior.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-okta.behavior.Behavior.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.behavior.Behavior.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="@cdktf/provider-okta.behavior.Behavior.resetId"></a>

```java
public void resetId()
```

##### `resetLocationGranularityType` <a name="resetLocationGranularityType" id="@cdktf/provider-okta.behavior.Behavior.resetLocationGranularityType"></a>

```java
public void resetLocationGranularityType()
```

##### `resetNumberOfAuthentications` <a name="resetNumberOfAuthentications" id="@cdktf/provider-okta.behavior.Behavior.resetNumberOfAuthentications"></a>

```java
public void resetNumberOfAuthentications()
```

##### `resetRadiusFromLocation` <a name="resetRadiusFromLocation" id="@cdktf/provider-okta.behavior.Behavior.resetRadiusFromLocation"></a>

```java
public void resetRadiusFromLocation()
```

##### `resetStatus` <a name="resetStatus" id="@cdktf/provider-okta.behavior.Behavior.resetStatus"></a>

```java
public void resetStatus()
```

##### `resetVelocity` <a name="resetVelocity" id="@cdktf/provider-okta.behavior.Behavior.resetVelocity"></a>

```java
public void resetVelocity()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-okta.behavior.Behavior.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.okta.behavior.Behavior;

Behavior.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.behavior.Behavior.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-okta.behavior.Behavior.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.okta.behavior.Behavior;

Behavior.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.behavior.Behavior.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-okta.behavior.Behavior.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.okta.behavior.Behavior;

Behavior.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.behavior.Behavior.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.property.locationGranularityTypeInput">locationGranularityTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.property.numberOfAuthenticationsInput">numberOfAuthenticationsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.property.radiusFromLocationInput">radiusFromLocationInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.property.statusInput">statusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.property.velocityInput">velocityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.property.locationGranularityType">locationGranularityType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.property.numberOfAuthentications">numberOfAuthentications</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.property.radiusFromLocation">radiusFromLocation</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.property.velocity">velocity</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-okta.behavior.Behavior.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-okta.behavior.Behavior.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-okta.behavior.Behavior.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-okta.behavior.Behavior.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-okta.behavior.Behavior.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-okta.behavior.Behavior.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-okta.behavior.Behavior.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.behavior.Behavior.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.behavior.Behavior.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.behavior.Behavior.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.behavior.Behavior.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.behavior.Behavior.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.behavior.Behavior.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.behavior.Behavior.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-okta.behavior.Behavior.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationGranularityTypeInput`<sup>Optional</sup> <a name="locationGranularityTypeInput" id="@cdktf/provider-okta.behavior.Behavior.property.locationGranularityTypeInput"></a>

```java
public java.lang.String getLocationGranularityTypeInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-okta.behavior.Behavior.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `numberOfAuthenticationsInput`<sup>Optional</sup> <a name="numberOfAuthenticationsInput" id="@cdktf/provider-okta.behavior.Behavior.property.numberOfAuthenticationsInput"></a>

```java
public java.lang.Number getNumberOfAuthenticationsInput();
```

- *Type:* java.lang.Number

---

##### `radiusFromLocationInput`<sup>Optional</sup> <a name="radiusFromLocationInput" id="@cdktf/provider-okta.behavior.Behavior.property.radiusFromLocationInput"></a>

```java
public java.lang.Number getRadiusFromLocationInput();
```

- *Type:* java.lang.Number

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-okta.behavior.Behavior.property.statusInput"></a>

```java
public java.lang.String getStatusInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-okta.behavior.Behavior.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `velocityInput`<sup>Optional</sup> <a name="velocityInput" id="@cdktf/provider-okta.behavior.Behavior.property.velocityInput"></a>

```java
public java.lang.Number getVelocityInput();
```

- *Type:* java.lang.Number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.behavior.Behavior.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `locationGranularityType`<sup>Required</sup> <a name="locationGranularityType" id="@cdktf/provider-okta.behavior.Behavior.property.locationGranularityType"></a>

```java
public java.lang.String getLocationGranularityType();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.behavior.Behavior.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `numberOfAuthentications`<sup>Required</sup> <a name="numberOfAuthentications" id="@cdktf/provider-okta.behavior.Behavior.property.numberOfAuthentications"></a>

```java
public java.lang.Number getNumberOfAuthentications();
```

- *Type:* java.lang.Number

---

##### `radiusFromLocation`<sup>Required</sup> <a name="radiusFromLocation" id="@cdktf/provider-okta.behavior.Behavior.property.radiusFromLocation"></a>

```java
public java.lang.Number getRadiusFromLocation();
```

- *Type:* java.lang.Number

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-okta.behavior.Behavior.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-okta.behavior.Behavior.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `velocity`<sup>Required</sup> <a name="velocity" id="@cdktf/provider-okta.behavior.Behavior.property.velocity"></a>

```java
public java.lang.Number getVelocity();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.behavior.Behavior.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-okta.behavior.Behavior.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### BehaviorConfig <a name="BehaviorConfig" id="@cdktf/provider-okta.behavior.BehaviorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.behavior.BehaviorConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.okta.behavior.BehaviorConfig;

BehaviorConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .name(java.lang.String)
    .type(java.lang.String)
//  .id(java.lang.String)
//  .locationGranularityType(java.lang.String)
//  .numberOfAuthentications(java.lang.Number)
//  .radiusFromLocation(java.lang.Number)
//  .status(java.lang.String)
//  .velocity(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.behavior.BehaviorConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.BehaviorConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.BehaviorConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.BehaviorConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.BehaviorConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.BehaviorConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.BehaviorConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.behavior.BehaviorConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the behavior. |
| <code><a href="#@cdktf/provider-okta.behavior.BehaviorConfig.property.type">type</a></code> | <code>java.lang.String</code> | Behavior type. |
| <code><a href="#@cdktf/provider-okta.behavior.BehaviorConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.1/docs/resources/behavior#id Behavior#id}. |
| <code><a href="#@cdktf/provider-okta.behavior.BehaviorConfig.property.locationGranularityType">locationGranularityType</a></code> | <code>java.lang.String</code> | Determines the method and level of detail used to evaluate the behavior. |
| <code><a href="#@cdktf/provider-okta.behavior.BehaviorConfig.property.numberOfAuthentications">numberOfAuthentications</a></code> | <code>java.lang.Number</code> | The number of recent authentications used to evaluate the behavior. |
| <code><a href="#@cdktf/provider-okta.behavior.BehaviorConfig.property.radiusFromLocation">radiusFromLocation</a></code> | <code>java.lang.Number</code> | Radius from location (in kilometers). |
| <code><a href="#@cdktf/provider-okta.behavior.BehaviorConfig.property.status">status</a></code> | <code>java.lang.String</code> | Behavior status: ACTIVE or INACTIVE. |
| <code><a href="#@cdktf/provider-okta.behavior.BehaviorConfig.property.velocity">velocity</a></code> | <code>java.lang.Number</code> | Velocity (in kilometers per hour). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-okta.behavior.BehaviorConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-okta.behavior.BehaviorConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-okta.behavior.BehaviorConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-okta.behavior.BehaviorConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-okta.behavior.BehaviorConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.behavior.BehaviorConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-okta.behavior.BehaviorConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-okta.behavior.BehaviorConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the behavior.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.1/docs/resources/behavior#name Behavior#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-okta.behavior.BehaviorConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Behavior type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.1/docs/resources/behavior#type Behavior#type}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-okta.behavior.BehaviorConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.1/docs/resources/behavior#id Behavior#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `locationGranularityType`<sup>Optional</sup> <a name="locationGranularityType" id="@cdktf/provider-okta.behavior.BehaviorConfig.property.locationGranularityType"></a>

```java
public java.lang.String getLocationGranularityType();
```

- *Type:* java.lang.String

Determines the method and level of detail used to evaluate the behavior.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.1/docs/resources/behavior#location_granularity_type Behavior#location_granularity_type}

---

##### `numberOfAuthentications`<sup>Optional</sup> <a name="numberOfAuthentications" id="@cdktf/provider-okta.behavior.BehaviorConfig.property.numberOfAuthentications"></a>

```java
public java.lang.Number getNumberOfAuthentications();
```

- *Type:* java.lang.Number

The number of recent authentications used to evaluate the behavior.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.1/docs/resources/behavior#number_of_authentications Behavior#number_of_authentications}

---

##### `radiusFromLocation`<sup>Optional</sup> <a name="radiusFromLocation" id="@cdktf/provider-okta.behavior.BehaviorConfig.property.radiusFromLocation"></a>

```java
public java.lang.Number getRadiusFromLocation();
```

- *Type:* java.lang.Number

Radius from location (in kilometers).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.1/docs/resources/behavior#radius_from_location Behavior#radius_from_location}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-okta.behavior.BehaviorConfig.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

Behavior status: ACTIVE or INACTIVE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.1/docs/resources/behavior#status Behavior#status}

---

##### `velocity`<sup>Optional</sup> <a name="velocity" id="@cdktf/provider-okta.behavior.BehaviorConfig.property.velocity"></a>

```java
public java.lang.Number getVelocity();
```

- *Type:* java.lang.Number

Velocity (in kilometers per hour).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.1/docs/resources/behavior#velocity Behavior#velocity}

---



